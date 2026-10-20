import styled from "styled-components";

export const HomeWrapper = styled.div`
  width: 100%;
  background-color: var(--color-gray-bg);
  display: flex;
  flex-direction: column;
  overflow-x: hidden;

  /* padding-top: 4.5rem; */
  padding-top: 75px;

  section {
    width: 100vw !important;
    position: relative;
    left: 50%;
    right: 50%;
    margin-left: -50vw !important;
    margin-right: -50vw !important;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 0 !important;
    padding-right: 0 !important;

    & > div:first-child,
    .hero-content,
    .swiper {
      width: 100% !important;
      max-width: 1200px !important;
      margin-left: auto !important;
      margin-right: auto !important;
      padding-left: 2rem !important;
      padding-right: 2rem !important;
      box-sizing: border-box;
    }
  }

  .hero-buttons {
    display: flex;
    gap: 1.2rem;
    margin-top: 2.5rem;
    justify-content: flex-start;

    button,
    a {
      min-width: 160px;
    }

    @media (max-width: 992px) {
      justify-content: center;
    }

    @media (max-width: 480px) {
      flex-direction: column;
      width: 100%;
      button,
      a {
        width: 100%;
      }
    }
  }

  /* &[dir="rtl"] {
    section {
      text-align: right;
    }
    .hero-buttons {
      justify-content: flex-start;

      @media (max-width: 992px) {
        justify-content: center;
      }
    }
  } */
`;
