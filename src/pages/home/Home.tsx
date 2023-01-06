import React, { FC } from 'react';
import Hero from '../../components/hero/Hero';

const Home: FC = () => {
  return (
    <Hero
      title="Welcome to React TypeScript Boilerplate"
      text="Edit src/components/Hero.tsx and save to reload."
    />
  );
};

export default Home;
