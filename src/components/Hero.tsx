import React, { FC } from 'react';

// Media
import logo from '../assets/react-logo.svg';

interface HeroPropsType {
  title: string;
  text?: string;
}

const Hero: FC<HeroPropsType> = ({ title, text }) => {
  return (
    <div className="Hero">
      <header className="Hero-header">
        <img src={logo} className="Hero-logo" alt="logo" />
        <h4>{title}</h4>
        <p>{text ?? ''}</p>
      </header>
    </div>
  );
};

export default Hero;
