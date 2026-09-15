import styled from "styled-components";

const Styles = styled.div`
  .hero {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-white);
    background-color: var(--color-navy-hero);
    
    background-image:
      linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);

    background-size: 40px 40px;
  }

  .hero-content {
    width: 100%;
    text-align: center;
  }
/* *******************************Homeeeeeee************************* */
  .hero-home {
  min-height: 400px;
  padding: 80px 0;
}

.hero-home h1 {
  font-size: 2.25rem;
  font-weight: 600;
}

.hero-home p {
  text-align: center;
  max-width: 650px;
  margin: 0 auto 1.5rem;
  font-size: var(--font-size);
  line-height: 1.6;
}
/* ***************************quizzzz********************* */
.hero-quiz {
  min-height: 335px;
  padding: 25px 20px;
}

.hero-quiz .hero-content {
  text-align: center;
}

.hero-quiz h1 {
  margin: 0 0 8px;
  color: var(--color-white);
  font-size: 36px;
  font-weight: 700;
}

.hero-quiz p {
  margin: 0 0 15px;
  color: var(--color-gray-bg);
  font-size: var(--font-size);
}

.hero-quiz .questionCount {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 65px;
  padding: 5px 12px;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.15);
  color: var(--color-white);
  font-size: var(--font-size);
  font-weight: 600;
}
/* ******************Productttttttttt**************** */
.hero-products {
  min-height: 170px;
  padding: 0 24px;
}

.hero-products .hero-content {
  max-width: 1200px;
}

.hero-products h1 {
  margin: 0 0 8px;
  font-size: 36px;
  font-weight: 700;
  line-height: 1.2;
}

.hero-products p {
  max-width: 620px;
  margin: 0 auto;
  font-size: 14px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.9);
}


@media (max-width: 768px) {
  .hero-home {
    min-height: 350px;
    padding: 60px 0;
  }

  .hero-home h1 {
    font-size: 1.9rem;
  }

  .hero-home p {
    max-width: 600px;
    font-size: 0.75rem;
    padding: 0 15px;
  }
  .hero-quiz {
    min-height: 140px;
    padding: 25px 16px;
  }

  .hero-quiz h1 {
    font-size: 23px;
  }

  .hero-quiz p {
    font-size: 11px;
  }
  .hero-products {
    min-height: 135px;
    padding: 0 20px;
  }

  .hero-products h1 {
    font-size: 28px;
  }

  .hero-products p {
    font-size: 12px;
    max-width: 580px;
  }

}

@media (max-width: 480px) {
  .hero-home {
    min-height: 320px;
    padding: 50px 0;
  }

  .hero-home h1 {
    font-size: 1.6rem;
  }

  .hero-home p {
    font-size: 0.7rem;
    line-height: 1.6;
    padding: 0 10px;
  }
  .hero-quiz {
    min-height: 125px;
    padding: 20px 12px;
  }

  .hero-quiz h1 {
    font-size: 20px;
  }

  .hero-quiz p {
    font-size: 10px;
    padding: 0 10px;
  }

  .hero-quiz .questionCount {
    font-size: 9px;
    padding: 5px 10px;
  }
   .hero-products {
    min-height: 125px;
    padding: 0 16px;
  }

  .hero-products h1 {
    font-size: 25px;
  }

  .hero-products p {
    font-size: 11px;
    line-height: 1.6;
  }
}
`;

export default Styles;