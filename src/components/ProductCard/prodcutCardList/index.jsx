import React from 'react';
import CustomButton from '../../../components/common/custome-button'; 
import ProductRating from '../ProductRating'; 
import ListStyles from './styles'; 

const ProductCardList = ({ product, onAddToCart }) => {
  const { badge, category, name, description, rating, reviewsCount, price, colorBg } = product;

  return (
   
    <ListStyles bgCol={colorBg}>
      <div className="cardWrapper">
        
        {/* Left icon box*/}
        <div className="imageContainer">
          {badge && <div className="badge">{badge}</div>}
          <i className="bi bi-box" style={{ fontSize: '2.5rem', color: '#ffffff' }}></i> 
        </div>

        {/* Product Details and Text*/}
        <div className="cardContent">
          <p className="categoryText">🔸 {category}</p>
          <h2 className="productTitle">{name}</h2> 
          <p className="productDescription">{description}</p>
          
          {/* Invoking the Stars component*/}
          <ProductRating rating={rating} reviewsCount={reviewsCount} />
        </div>

        {/* Right side: Price and control buttons*/}
        <div className="rightSideAction">
          <p className="priceText">
            ${price}<span>/mo</span>
          </p>
          
          <div className="buttonGroup">
            <CustomButton text="Details" variant="outline" size="sm" />
            <CustomButton text="Add" variant="solid" size="sm" onClick={() => onAddToCart(product)} />
          </div>
        </div>
      </div>
    </ListStyles>
  );
};

export default ProductCardList;
