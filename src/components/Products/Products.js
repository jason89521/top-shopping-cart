import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Box, Sidebar, SidebarLink, Main, List, ListItem } from './Products.style';
import { useGetCategoriesQuery, useGetProductsQuery } from '../../slices/fakeStoreApiSlice';
import { addProduct } from '../../slices/cartSlice';

const Products = () => {
  const { currentCategory } = useParams();
  const { data: categories, isFetching: isCategoriesFetching } = useGetCategoriesQuery();
  const { data: products, isFetching: isProductsFetching } = useGetProductsQuery();

  const dispatch = useDispatch();

  const renderCategories = () => {
    if (isCategoriesFetching) return <span>Loading...</span>;

    return categories.map(category => {
      const active = category === currentCategory ? 'active' : '';
      return (
        <SidebarLink to={`/products/${category}`} key={category} className={active}>
          {category}
        </SidebarLink>
      );
    });
  };

  const renderProduct = product => {
    return (
      <ListItem key={product.id}>
        <img src={product.image} alt={product.title} />
        <h1>{product.title}</h1>
        <div>
          <span>${product.price}</span>
          <button onClick={() => dispatch(addProduct(product))}>Add to cart</button>
        </div>
      </ListItem>
    );
  };

  const renderProducts = () => {
    if (isProductsFetching) return <span>Loading</span>;

    if (currentCategory)
      return products
        .filter(product => product.category === currentCategory)
        .map(product => renderProduct(product));

    return products.map(product => renderProduct(product));
  };

  return (
    <Box>
      <Sidebar>
        <SidebarLink to="/products" key="All" className={!currentCategory ? 'active' : ''}>
          All
        </SidebarLink>
        {renderCategories()}
      </Sidebar>
      <Main>
        <List>{renderProducts()}</List>
      </Main>
    </Box>
  );
};

export default Products;
