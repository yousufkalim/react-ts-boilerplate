import React, { FC } from 'react';

// Style
import './Hero.css';

// Media
import logo from '../../assets/home/react-logo.svg';

interface HeroProps {
  title: string;
  text?: string;
}

const Hero: FC<HeroProps> = ({ title, text }) => {
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
