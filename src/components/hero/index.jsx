import React from "react";
import Styles from "./styles";
import Badge from "../badge";

const Hero = ({
  title,
  description,
  variant,
  badgeText,
  statsGrid,
  children,
}) => {
  return (
    <Styles>
      <section className={`hero hero-${variant}`}>
        <div className="hero-container">
          <div className="hero-content">
            {variant === "home" ? (
              <>
                <div className="hero-text-side">
                  {badgeText && <Badge text={badgeText} variant="hero" />}

                  <h1>{title}</h1>

                  <p>{description}</p>

                  <div className="hero-buttons-wrapper">{children}</div>
                </div>

                <div className="hero-graphics-side">{statsGrid}</div>
              </>
            ) : (
              <div className="hero-center-side">
                {badgeText && <Badge text={badgeText} variant="hero" />}

                <h1>{title}</h1>

                <p>{description}</p>
                {children}
              </div>
            )}
          </div>
        </div>
      </section>
    </Styles>
  );
};

export default Hero;
