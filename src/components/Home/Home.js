import React from 'react';

import { useGetProductsQuery, useGetCategoriesQuery } from '../../slices/fakeStoreApiSlice';
import Card from './Card';
import { Heading, CardsBox, Loader } from './Home.style';

const getFirstProductByCategories = (products, categories) => {
  const ret = [];
  categories.forEach(category => {
    const firstProduct = products.find(product => product.category === category);
    ret.push(firstProduct);
  });
  return ret;
};

const Home = () => {
  const { data: products, isFetching: isProductsFetching } = useGetProductsQuery();
  const { data: categories, isFetching: isCategoriesFetching } = useGetCategoriesQuery();

  const renderContent = () => {
    if (isProductsFetching || isCategoriesFetching) {
      return <Loader />;
    }

    const demoProducts = getFirstProductByCategories(products, categories).map(product => {
      return (
        <Card
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          category={product.category}
          image={product.image}
        />
      );
    });

    return <CardsBox>{demoProducts}</CardsBox>;
  };

  return (
    <div>
      <Heading>
        <span>The Best Store You've Ever Seen!</span>
        <span>We try to make the the most popular products in the world.</span>
        <span>We promise that our products are the best products you've ever seen.</span>
        <span>Just try it!</span>
      </Heading>
      {renderContent()}
    </div>
  );
};

export default Home;
