import React from 'react';
import { useParams } from 'react-router-dom';

import { Box, Sidebar, SidebarLink, Main, List, ListItem } from './Products.style';
import { useGetCategoriesQuery, useGetProductsQuery } from '../../slices/fakeStoreApiSlice';

const Products = () => {
  const { categoryName } = useParams();
  const { data: categories, isFetching: isCategoriesFetching } = useGetCategoriesQuery();
  const { data: products, isFetching: isProductsFetching } = useGetProductsQuery();

  const renderCategories = () => {
    if (isCategoriesFetching) return <span>Loading...</span>;

    const ret = categories.map(category => {
      const isActive = categoryName === category;
      return (
        <SidebarLink to={`/products/${category}`} key={category} isActive={isActive}>
          {category}
        </SidebarLink>
      );
    });
    ret.unshift(
      <SidebarLink to="/products" key="All" isActive={!categoryName}>
        All
      </SidebarLink>
    );
    return ret;
  };

  const renderProduct = product => {
    return (
      <ListItem key={product.id}>
        <img src={product.image} alt={product.title} />
        <h1>{product.title}</h1>
        <div>
          <span>${product.price}</span>
          <button>Add to cart</button>
        </div>
      </ListItem>
    );
  };

  const renderProducts = () => {
    if (isProductsFetching) return <span>Loading</span>;

    if (categoryName)
      return products
        .filter(product => product.category === categoryName)
        .map(product => renderProduct(product));

    return products.map(product => renderProduct(product));
  };

  return (
    <Box>
      <Sidebar>{renderCategories()}</Sidebar>
      <Main>
        <List>{renderProducts()}</List>
      </Main>
    </Box>
  );
};

export default Products;
