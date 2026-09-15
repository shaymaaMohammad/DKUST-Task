import React from "react";
import Styles from "./styles";

const Hero = ({ title, description, variant, children }) => {
  return (
    <Styles>
      <section className={`hero hero-${variant}`}>
        <div className="hero-content">
          <h1>{title}</h1>
          <p>{description}</p>
          {children}
        </div>
      </section>
    </Styles>
  );
};

export default Hero;