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
