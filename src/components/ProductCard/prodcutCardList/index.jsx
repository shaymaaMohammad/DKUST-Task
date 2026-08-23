import React from 'react';
import CustomButton from '../../../components/common/custome-button'; 
import ProductRating from '../ProductRating'; 
import ListStyles from './styles'; 
import { useNavigate } from 'react-router-dom';

const ProductCardList = ({ product, onAddToCart }) => {
  const { id, badge, category, name, description, rating, reviewsCount, price, colorBg } = product;
  const navigate = useNavigate(); 

   //Go to the details page
  const handleDetailsClick = () => {
    navigate(`/products/${id}`); 
    window.scrollTo(0, 0); 
  };

  return (
    <ListStyles bgCol={colorBg}>
      <div className="cardWrapper">
        
        {/*Top-opening cube box*/}
        <div className="imageContainer">
          {badge && <div className="badge">{badge}</div>}
          <i className="bi bi-box mainCardListIcon"></i> 
        </div>

         {/*cardContent */}
        <div className="cardContent">
          <p className="categoryText">🔸 {category}</p>
          <h2 className="productTitle">{name}</h2> 
          <p className="productDescription">{description}</p>
          
          <ProductRating rating={rating} reviewsCount={reviewsCount} />
        </div>
        <div className="rightSideAction">
          <p className="priceText">
            ${price}<span>/mo</span>
          </p>
          
          <div className="buttonGroup">
            <CustomButton text="Details" variant="outline" size="sm" onClick={handleDetailsClick} />
            <CustomButton text="Add" variant="solid" size="sm" onClick={() => onAddToCart(product)} />
          </div>
        </div>
      </div>
    </ListStyles>
  );
};

export default ProductCardList;
