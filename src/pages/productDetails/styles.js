import styled from 'styled-components';

const Styles = styled.div`
  font-family: var(--font-primary);
  background-color:var(--color-gray-bg); 
  min-height: 100vh;
  width: 100%;
  .productDetailsContainer {
  max-width: 1200px;
}

  .breadcrumbContainer {
    background-color:var(--color-white);
    width: 100%;
    padding: 20px 0;
    border-bottom: 1px solid #f1f5f9;
  }

  .breadcrumb {
    color: var(--color-text-gray);
    font-size: 14px;
    margin: 0;
    a { 
      color: var(--color-text-gray); 
      text-decoration: none;
       &:hover {
         color: var(--color-green); 
        }
       }
    span.current-product {
       font-weight: 600;
        color:var(--color-text-gray); 
      }
  }

  .backLinkSection {
    width: 100%;
    padding: 25px 0 10px 0;
  }

  .backLinkRow a {
    text-decoration: none; 
    color: var(--color-text-gray); 
    font-size: 14px; 
    font-weight: 500;
    display: inline-flex; 
    align-items: center; 
    gap: 8px;
     &:hover { 
      color: var(--color-text-dark);
     }
  }

 .productDetailCard {
  background:var(--color-white);
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid #d9dee7;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);

  margin-top: 12px;
  margin-bottom: 48px;
}
.productVisual {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  min-height: 280px;
  padding: 30px 20px;

  gap: 14px;
}


 .mainVisualIcon {
  font-size: 4.5rem;
  color:var(--color-white);
  display: block;
}
  .visualBadge {
    background:var(--color-green);
    color:var(--color-white);
    padding: 6px 20px;
    border-radius: 20px;
    font-size: 13px;
    font-weight: bold;
    display: inline-block;
  }

 .productInfo {
  padding: 28px 30px;

  display: flex;
  flex-direction: column;
  justify-content: center;
}
  .categoryTag {
     background:var(--color-gray-bg); 
     color:var(--color-text-gray); 
     padding: 4px 12px; 
     border-radius: 6px; 
     font-size: 13px; 
     align-self: flex-start; 
     font-weight: 500; }
  h2 {
  font-size: 30px;
  font-weight: 800;
  color:var(--color-text-dark);
  margin: 10px 0 8px;
}
  .ratingRow {
  margin-bottom: 14px;
    display: flex; 
    align-items: center; 
    gap: 8px; 
    span { 
      color:var(--color-text-gray); 
      font-size: 14px; } }
  .description { 
    color:var(--color-text-gray); 
    line-height: 1.6; 
    font-size: 15px; 
  margin-bottom: 16px;
 }

  .featureList {
    list-style: none;
     padding: 0; 
     display: flex; 
     flex-direction: column; 
    margin: 0 0 20px 0;
  gap: 8px;
    li {
       display: flex; 
      align-items: center; 
      gap: 10px; 
      color:var(--color-text-gray); 
      font-size: 15px; 
      i { 
        color:var(--color-green); 
        font-size: 16px; 
      } 
    }
  }

 .priceRow {
  display: flex;
  align-items: baseline;
  gap: 3px;

  margin-bottom: 16px;

   .amount {
  font-size: 24px;
  font-weight: 800;
  color:var(--color-green);
}
  .period {
  color:var(--color-text-gray);
  font-size: 10px;
}
  }

.quantityRow {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;

  .qty-label {
    font-weight: 500;
    color: var(--color-text-gray);
    font-size: 12px;
  }
}
  



.qtySelector {
  display: flex;
  align-items: center;
  height: 32px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  overflow: hidden;
  background:var(--color-white);

  button {
    width: 32px;
    height: 100%;
    padding: 0;
    border: none;
    background:var(--color-gray-bg);
    color:var(--color-text-gray);

    font-size: 16px;
    line-height: 0;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover:not(:disabled) {
      background:var(--color-gray-bg);
    }

    &:disabled {
      color: #cbd5e1;
      cursor: default;
    }
  }

  input {
    width: 38px;
    height: 100%;
    padding: 0;
    border: none;
    border-left: 1px solid #e2e8f0;
    border-right: 1px solid #e2e8f0;
    text-align: center;
    font-size: 13px;
    font-weight: 600;
    color:var(--color-text-gray);
    background:var(--color-white);
    outline: none;
  }
}
.relatedSection {
  margin-top: 0;

  border-top: 1px solid #d9dee7;

  padding-top: 14px;

  h3 {
    font-size: 14px;
    font-weight: 600;

    color:var(--color-text-gray);

    margin-bottom: 14px;
  }
}
  
  .errorContainer {
    padding: 100px 20px;
  }
  .errorIcon {
    font-size: 4rem; 
    color:var(--color-text-gray);
  }
  .errorTitle {
    color:var(--color-text-dark); 
    font-weight: 700; 
    margin-top: 20px;
  }
  .errorText {
    color:var(--color-text-gray); 
    margin: 10px 0 30px 0;
  }
  .relatedProductsSwiper {
  width: 100%;
  padding: 5px 2px 45px;
}

.relatedProductItem {
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.relatedProductsSwiper .swiper-slide {
  height: auto;
}

.relatedProductsSwiper .swiper-button-next,
.relatedProductsSwiper .swiper-button-prev {
  width: 30px;
  height: 30px;

  border-radius: 50%;

  background-color:var(--color-white);

  border: 1px solid #d9dee7;

  color:var(--color-green);

  box-shadow: 0 2px 6px rgba(15, 23, 42, 0.08);
}

.relatedProductsSwiper .swiper-button-next::after,
.relatedProductsSwiper .swiper-button-prev::after {
  font-size: 12px;
  font-weight: 700;
}

.relatedProductsSwiper .swiper-pagination {
  bottom: 5px;
}

.relatedProductsSwiper .swiper-pagination-bullet {
  width: 7px;
  height: 7px;

  background-color: var(--color-gray-bg);

  opacity: 1;
}

.relatedProductsSwiper .swiper-pagination-bullet-active {
  width: 20px;

  border-radius: 10px;

  background-color:var(--color-green);
}

@media (max-width: 768px) {
  .productDetailCard {
    margin-bottom: 35px;
  }

  .productVisual {
    min-height: 240px;
  }

  .productInfo {
    padding: 24px 22px;
  }

  h2 {
    font-size: 26px;
  }

  .description {
    font-size: 14px;
  }

  .featureList {
    li {
      font-size: 14px;
    }
  }

  .relatedProductsSwiper {
    padding-left: 5px;
    padding-right: 5px;
  }
}

@media (max-width: 576px) {
  .breadcrumbContainer {
    padding: 14px 0;
  }

  .breadcrumb {
    font-size: 11px;

    flex-wrap: wrap;

    row-gap: 4px;
  }

  .backLinkSection {
    padding: 16px 0 8px;
  }

  .backLinkRow a {
    font-size: 12px;
  }

  .productVisual {
    min-height: 210px;
    padding: 25px 15px;
  }

  .mainVisualIcon {
    font-size: 3.5rem;
  }

  .visualBadge {
    padding: 5px 15px;
    font-size: 11px;
  }

  .productInfo {
    padding: 20px 16px;
  }

  .categoryTag {
    font-size: 11px;
  }

  h2 {
    font-size: 23px;
    line-height: 1.3;
  }

  .description {
    font-size: 13px;
  }

  .featureList {
    gap: 7px;

    li {
      font-size: 13px;
      gap: 8px;
    }
  }

  .priceRow {
    .amount {
      font-size: 22px;
    }
  }

  .quantityRow {
    margin-bottom: 16px;
  }

  .actionRow {
    flex-direction: column;
    align-items: stretch !important;
    gap: 10px !important;

    > div {
      width: 100%;
    }
  }

  .relatedSection {
    padding-top: 16px;

    h3 {
      margin-bottom: 16px;
    }
  }

  .relatedProductsSwiper {
    padding-bottom: 42px;
  }

  .relatedProductsSwiper .swiper-button-next,
  .relatedProductsSwiper .swiper-button-prev {
    display: none;
  }
}
`;

export default Styles;
