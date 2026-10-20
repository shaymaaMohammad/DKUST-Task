// import styled from "styled-components";

// const Styles = styled.div`
//   .hero {
//     width: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     color: var(--color-white);
//     background-color: var(--color-navy-hero);
//     padding: 10rem 0;

//     background-image:
//       linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
//       linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);

//     background-size: 40px 40px;
//   }

//   .hero-content {
//     width: 100%;
//     text-align: center;
//   }
//   /* *******************************Homeeeeeee************************* */
//   .hero-home {
//     min-height: 400px;
//     padding: 80px 0;
//   }

//   .hero-home h1 {
//     font-size: 2.25rem;
//     font-weight: 600;
//   }

//   .hero-home p {
//     text-align: center;
//     max-width: 650px;
//     margin: 0 auto 1.5rem;
//     font-size: var(--font-size);
//     line-height: 1.6;
//   }
//   /* ***************************quizzzz********************* */
//   .hero-quiz {
//     min-height: 335px;
//     padding: 25px 20px;
//   }

//   .hero-quiz .hero-content {
//     text-align: center;
//   }

//   .hero-quiz h1 {
//     margin: 0 0 8px;
//     color: var(--color-white);
//     font-size: 36px;
//     font-weight: 700;
//   }

//   .hero-quiz p {
//     margin: 0 0 15px;
//     color: var(--color-gray-bg);
//     font-size: var(--font-size);
//   }

//   .hero-quiz .questionCount {
//     display: inline-flex;
//     align-items: center;
//     justify-content: center;
//     min-width: 65px;
//     padding: 5px 12px;
//     border-radius: 20px;
//     background-color: rgba(255, 255, 255, 0.15);
//     color: var(--color-white);
//     font-size: var(--font-size);
//     font-weight: 600;
//   }
//   /* ******************Productttttttttt**************** */
//   .hero-products {
//     min-height: 170px;
//     padding: 66px 24px 0;
//   }

//   .hero-products .hero-content {
//     max-width: 1200px;
//   }

//   .hero-products h1 {
//     margin: 0 0 8px;
//     font-size: 36px;
//     font-weight: 700;
//     line-height: 1.2;
//   }

//   .hero-products p {
//     max-width: 620px;
//     margin: 0 auto;
//     font-size: 14px;
//     line-height: 1.7;
//     color: rgba(255, 255, 255, 0.9);
//   }

//   @media (max-width: 768px) {
//     .hero-home {
//       min-height: 350px;
//       padding: 60px 0;
//     }

//     .hero-home h1 {
//       font-size: 1.9rem;
//     }

//     .hero-home p {
//       max-width: 600px;
//       font-size: 0.75rem;
//       padding: 0 15px;
//     }
//     .hero-quiz {
//       min-height: 140px;
//       padding: 25px 16px;
//     }

//     .hero-quiz h1 {
//       font-size: 23px;
//     }

//     .hero-quiz p {
//       font-size: 11px;
//     }
//     .hero-products {
//       min-height: 135px;
//       padding: 66px 20px 0;
//       box-sizing: border-box;
//     }

//     .hero-products h1 {
//       font-size: 28px;
//     }

//     .hero-products p {
//       font-size: 12px;
//       max-width: 580px;
//     }
//   }

//   @media (max-width: 480px) {
//     .hero-home {
//       min-height: 320px;
//       padding: 50px 0;
//     }

//     .hero-home h1 {
//       font-size: 1.6rem;
//     }

//     .hero-home p {
//       font-size: 0.7rem;
//       line-height: 1.6;
//       padding: 0 10px;
//     }
//     .hero-quiz {
//       min-height: 125px;
//       padding: 20px 12px;
//     }

//     .hero-quiz h1 {
//       font-size: 20px;
//     }

//     .hero-quiz p {
//       font-size: 10px;
//       padding: 0 10px;
//     }

//     .hero-quiz .questionCount {
//       font-size: 9px;
//       padding: 5px 10px;
//     }
//     .hero-products {
//       min-height: 125px;
//       padding: 66px 16px 0;
//       box-sizing: border-box;
//     }

//     .hero-products h1 {
//       font-size: 25px;
//     }

//     .hero-products p {
//       font-size: 11px;
//       line-height: 1.6;
//     }
//   }
// `;

// export default Styles;

import styled from "styled-components";

const Styles = styled.div`
  width: 100%;

  .hero {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-white);
    background-color: var(--color-navy-dark);
    padding: 5rem 0;
    position: relative;
    box-sizing: border-box;

    background-image:
      linear-gradient(rgba(255, 255, 255, 0.015) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.015) 1px, transparent 1px);
    background-size: 40px 40px;
  }

  .hero-container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    box-sizing: border-box;
  }

  .hero-content {
    width: 100%;
  }

  .green-text {
    color: var(--color-green-hover) !important;
  }

  .hero-home {
    background-image:
      linear-gradient(rgba(255, 255, 255, 0.015) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.015) 1px, transparent 1px);

    .hero-content {
      display: grid !important;
      grid-template-columns: 1.2fr 1fr !important;
      gap: 4rem;
      align-items: center;
    }

    .hero-text-side {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      text-align: left;

      h1 {
        font-size: 3rem;
        font-weight: 800;
        line-height: 1.2;
        margin: 1rem 0 1.5rem 0;
        text-align: left;
      }

      p {
        color: rgba(255, 255, 255, 0.7);
        max-width: 550px;
        margin: 0 0 2rem 0;
        font-size: 1.05rem;
        line-height: 1.6;
        text-align: left;
      }

      .hero-buttons-wrapper {
        display: flex;
        gap: 1rem;
        width: 100%;

        button,
        a {
          min-width: 160px;
        }
      }
    }

    .hero-graphics-side {
      width: 100%;
      .hero-stats-grid {
        display: grid !important;
        grid-template-columns: repeat(2, 1fr) !important;
        gap: 1.2rem;
        width: 100%;
      }
    }
  }

  /* *************************** (Services) ********************* */
  .hero-services {
    background-color: var(--color-navy-hero);
    padding: 5rem 0;

    .hero-content {
      display: flex !important;
      justify-content: center;
      align-items: center;
      width: 100%;
    }

    .hero-center-side {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      width: 100%;
      max-width: 800px;

      h1 {
        font-size: 2.5rem;
        font-weight: 800;
        margin: 1rem 0;
        text-align: center;
      }

      p {
        font-size: 1.1rem;
        line-height: 1.6;
        color: rgba(255, 255, 255, 0.8);
        text-align: center;
        margin: 0;
      }
    }
  }

  /* *************************quiz and products********************* */
  .hero-quiz,
  .hero-products {
    background-color: var(--color-navy-hero);
    .hero-content {
      text-align: center;
      display: block !important;
    }
    .hero-center-side {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
    h1 {
      font-size: 2.25rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
    }
    p {
      font-size: 1rem;
      color: rgba(255, 255, 255, 0.9);
    }
  }

  /* ****************** responsive***************** */
  @media (max-width: 992px) {
    .hero-home {
      .hero-content {
        grid-template-columns: 1fr !important;
        gap: 3rem;
      }
      .hero-text-side {
        align-items: center;
        text-align: center;
        h1 {
          text-align: center;
          font-size: 2.5rem;
        }
        p {
          text-align: center;
        }
        .hero-buttons-wrapper {
          justify-content: center;
        }
      }
    }
  }

  [dir="rtl"] & {
    .hero-home {
      .hero-text-side {
        align-items: flex-start;
        text-align: right;
        h1 {
          text-align: right;
        }
        p {
          text-align: right;
        }
        .hero-buttons-wrapper {
          justify-content: flex-start;
        }
      }
    }
  }
`;

export default Styles;
