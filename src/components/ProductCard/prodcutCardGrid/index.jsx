import React from 'react';
import CustomButton from '../../../components/common/custome-button';
import ProductRating from '../ProductRating';
import { useNavigate } from 'react-router-dom';
import ProductStyles from './styles';

const ProductCardGrid = ({
  product,
  onAddToCart,
  isMinimal = false,
}) => {
  const {
    id,
    badge,
    category,
    name,
    description,
    rating,
    reviewsCount,
    price,
    colorBg,
  } = product;

  const navigate = useNavigate();

  
  const badgeClassName = badge
    ? badge.toLowerCase().replace(/\s+/g, '-')
    : '';

  // Go to the details page.
  const handleDetailsClick = () => {
    navigate(`/products/${id}`);
    window.scrollTo(0, 0);
  };

  return (
    <ProductStyles bgCol={colorBg}>
      <div
        className={`cardWrapper ${
          isMinimal ? 'minimalCard' : ''
        }`}
      >
        {/* Product visual area */}
        <div className="imageContainer">
         {badge && !isMinimal && (
  <span className="badge">{badge}</span>
)}

          <i className="bi bi-box mainCardGridIcon"></i>
        </div>

        {/* Product content */}
        <div className="cardContent">
          <p className="categoryText">
            🔸 {category}
          </p>

          <h3 className="productTitle">
            {name}
          </h3>

          {!isMinimal && (
            <>
              <p className="productDescription">
                {description}
              </p>

              <ProductRating
                rating={rating}
                reviewsCount={reviewsCount}
              />
            </>
          )}

          <div className="cardFooter">
            <div className="priceText">
              ${price}
              <span>/mo</span>
            </div>

            {!isMinimal && (
              <div className="buttonGroup">
                <CustomButton
                  text="Details"
                  variant="outline"
                  size="sm"
                  onClick={handleDetailsClick}
                />

                <CustomButton
                  text="Add"
                  variant="solid"
                  size="sm"
                  onClick={() => onAddToCart(product)}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </ProductStyles>
  );
};

export default ProductCardGrid;