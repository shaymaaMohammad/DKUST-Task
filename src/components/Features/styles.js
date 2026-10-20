import styled from "styled-components";

const FeaturesWrapper = styled.section`
  width: 100%;
  background-color: var(--color-white);
  padding: 5rem 0;

  .features-container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    box-sizing: border-box;

    display: grid !important;
    grid-template-columns: repeat(3, 1fr) !important;
    gap: 3rem;

    @media (max-width: 992px) {
      grid-template-columns: repeat(2, 1fr) !important;
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr !important;
      gap: 2.5rem;
    }
  }

  .feature-card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    padding: 1rem 0;

    .icon-box {
      color: var(--color-green);
      font-size: 2.2rem;
      margin-bottom: 1.2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 60px;
      height: 60px;
      background-color: rgba(76, 175, 80, 0.08);
      border-radius: 12px;
    }

    h3 {
      font-size: 1.3rem;
      color: var(--color-text-dark);
      font-weight: 700;
      margin-bottom: 0.6rem;
    }

    p {
      color: var(--color-text-gray);
      font-size: 0.95rem;
      line-height: 1.6;
      margin: 0;
    }
  }

  /* [dir="rtl"] & {
    .features-container {
      text-align: right;
    }
    .feature-card {
      align-items: flex-start;
      text-align: right;
    }
  } */
`;
export default FeaturesWrapper;
