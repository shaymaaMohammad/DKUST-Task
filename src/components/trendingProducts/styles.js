import styled from "styled-components";

const ProductsSectionStyle = styled.section`
  width: 100%;
  background-color: var(--color-gray-bg);
  padding: 5rem 0;

  .products-container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    box-sizing: border-box;
  }

  .header-row {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 2.5rem;
    width: 100%;

    @media (max-width: 576px) {
      flex-direction: column;
      align-items: flex-start;
      gap: 1.2rem;
    }
  }

  .title-block {
    h4 {
      color: var(--color-green);
      font-size: 0.9rem;
      text-transform: uppercase;
      margin-bottom: 0.5rem;
      font-weight: 700;
    }
    h2 {
      color: var(--color-text-dark);
      font-size: 2.2rem;
      font-weight: 800;
    }
  }

  .view-all-btn {
    border: 1px solid var(--color-green);
    color: var(--color-green);
    padding: 0.6rem 1.6rem;
    border-radius: 6px;
    font-size: 0.85rem;
    font-weight: 700;
    transition: all 0.3s ease;
    text-decoration: none;

    &:hover {
      background-color: var(--color-green);
      color: var(--color-white);
    }
  }

  .swiper {
    width: 100% !important;
    padding-bottom: 3.5rem !important;
  }

  .swiper-pagination-bullet {
    background: var(--color-text-gray) !important;
    opacity: 0.3;
    width: 9px;
    height: 9px;
    margin: 0 6px !important;
    transition: all 0.3s ease;
  }

  .swiper-pagination-bullet-active {
    background: var(--color-green) !important;
    opacity: 1;
    width: 24px;
    border-radius: 5px;
  }
`;
export default ProductsSectionStyle;
