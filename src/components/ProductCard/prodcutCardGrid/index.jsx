import React from 'react';
import CustomButton from '../../../components/common/custome-button'; 
import ProductRating from '../ProductRating'; 
import ProductStyles from './styles';

const ProductCardGrid = ({ product, onAddToCart }) => {
  const { badge, category, name, description, rating, reviewsCount, price, colorBg } = product;

  return (
    /* We passed the `bgCol` here to the parent element so that Styled Components could read it dynamically and color the cube's background.*/
    <ProductStyles bgCol={colorBg}>
      <div className="cardWrapper">
        
        {/* Top-opening cube box*/}
        <div className="imageContainer">
          {badge && <span className="badge">{badge}</span>}
          {/* The white hollow cube icon*/}
          <i className="bi bi-box" style={{ fontSize: '3rem', color: '#ffffff' }}></i> 
        </div>

        {/* Bottom card content*/}
        <div className="cardContent">
          <p className="categoryText">🔸 {category}</p>
          <h3 className="productTitle">{name}</h3>
          <p className="productDescription">{description}</p>
          
          {/* Star Component*/}
          <ProductRating rating={rating} reviewsCount={reviewsCount} />

          
          <div className="cardFooter">
            <div className="priceText">
              ${price}<span>/mo</span>
            </div>
            
            <div className="buttonGroup">
              <CustomButton text="Details" variant="outline" size="sm" />
              <CustomButton text="Add" variant="solid" size="sm" onClick={() => onAddToCart(product)} />
            </div>
          </div>

        </div>
      </div>
    </ProductStyles>
  );
};

export default ProductCardGrid;
