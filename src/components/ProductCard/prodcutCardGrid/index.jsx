import React from 'react';
import CustomButton from '../../../components/common/custome-button'; 
import ProductRating from '../ProductRating';
import { useNavigate } from 'react-router-dom'; 
import ProductStyles from './styles';

const ProductCardGrid = ({ product, onAddToCart, isMinimal = false }) => {
  const { id, badge, category, name, description, rating, reviewsCount, price, colorBg } = product;
  const navigate = useNavigate(); 

  //Go to the details page
  const handleDetailsClick = () => {
    navigate(`/products/${id}`); 
    window.scrollTo(0, 0); 
  };

  return (
    <ProductStyles bgCol={colorBg}>
      <div className={`cardWrapper ${isMinimal ? 'minimalCard' : ''}`}>
        
        {/*Top-opening cube box*/}
        <div className="imageContainer">
          {badge && <span className="badge">{badge}</span>}
          <i className="bi bi-box mainCardGridIcon"></i> 
        </div>

        {/*cardContent */}
        <div className="cardContent">
          <p className="categoryText">🔸 {category}</p>
          <h3 className="productTitle">{name}</h3>
          
          {/* Hide the description and rating in the mini-card view on the details page.*/}
          {!isMinimal && (
            <>
              <p className="productDescription">{description}</p>
              <ProductRating rating={rating} reviewsCount={reviewsCount} />
            </>
          )}
          
          <div className="cardFooter">
            <div className="priceText">
              ${price}<span>/mo</span>
            </div>
            
            {/* Hide buttons in the compact card view on the details page.*/}
            {!isMinimal && (
              <div className="buttonGroup">
                <CustomButton text="Details" variant="outline" size="sm" onClick={handleDetailsClick} />
                <CustomButton text="Add" variant="solid" size="sm" onClick={() => onAddToCart(product)} />
              </div>
            )}
          </div>

        </div>
      </div>
    </ProductStyles>
  );
};

export default ProductCardGrid;
