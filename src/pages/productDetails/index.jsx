import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import ProductRating from "../../components/ProductCard/ProductRating"; 
import CustomButton from "../../components/common/custome-button"; 
import ProductCardGrid from "../../components/ProductCard/prodcutCardGrid"; 
import productsArray from "../../data/productsData"; 
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Styles from "./styles"; 

// Product Features
const ProductFeatures = ({ features }) => {
  return (
    <ul className="featureList">
      {features?.map((feature, index) => (
        <li key={index}>
          <i className="bi bi-check-circle"></i>
          {feature}
        </li>
      ))}
    </ul>
  );
};
const ProductDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  const product = productsArray?.find((item) => item?.id === parseInt(id));
 // Handling the error when entering a non-existent ID
  if (!product) {
    return (
      <Styles>
        <div className="container productDetailsContainer pb-5 text-center errorContainer">
          <i className="bi bi-exclamation-circle errorIcon"></i>
          <h2 className="errorTitle">No products found</h2>
          <CustomButton text="Back to Products" variant="solid" onClick={() => navigate("/products")} />
        </div>
      </Styles>
    );
  }

  const handleAction = (actionType) => {
    console.log(`${actionType}:`, { ...product, quantity });
  };

  const sameCategoryProducts = productsArray?.filter(item => item?.category === product?.category && item?.id !== product?.id);
  const otherCategoryProducts = productsArray?.filter(item => item?.category !== product?.category && item?.id !== product?.id);
  const visibleRelated = [...sameCategoryProducts, ...otherCategoryProducts].slice(0, 3);

  return (
    <Styles bgCol={product?.colorBg}>
      {/* "breaddddddddddddddddddddcrumb*/}
      <div className="breadcrumbContainer">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span> / </span>
            <Link to="/products">Products</Link>
            <span> / </span>
            <span className="current-product">{product?.name}</span>
          </nav>
        </div>
      </div>
 {/* backLinkSectionnnnnnnnnnnnnnnnnnnnnn */}
      <div className="backLinkSection">
        <div className="container">
          <div className="backLinkRow">
            <Link to="/products">← Back to Products</Link>
          </div>
        </div>
      </div>
      
      <div className="container pb-5">
        <article className="productDetailCard row g-0">
          {/* Left Block: Cube image and badge */}
          <div className="productVisual col-12 col-md-6" style={{ backgroundColor: product?.colorBg }}>
            <i className="bi bi-box mainVisualIcon"></i>
            {product?.badge && <span className="visualBadge">{product?.badge}</span>}
          </div>
         {/* Right Block: productInfoooooooooooooo*/}
          <div className="productInfo col-12 col-md-6">
            <span className="categoryTag"> {product?.category}</span>
            <h2>{product?.name}</h2>
            <div className="ratingRow"><ProductRating rating={product?.rating} reviewsCount={product?.reviewsCount} /></div>
            <p className="description">{product?.description}</p>
          <ProductFeatures features={product?.features} />
            <div className="priceRow"><span className="amount">${product?.price}</span><span className="period">/month</span></div>
           {/* Quantity control buttons*/}
            <div className="quantityRow">
              <span className="qty-label">Qty:</span>
              <div className="qtySelector">
                <button type="button" onClick={() => setQuantity(q => Math.max(1, q - 1))} disabled={quantity === 1}>-</button>
                <input type="text" value={quantity} readOnly />
                <button type="button" onClick={() => setQuantity(q => q + 1)}>+</button>
              </div>
            </div>
            {/* Add and Buy Now Action Buttons*/}
            <div className="actionRow d-flex align-items-center gap-3">
              <div className="flex-grow-1"><CustomButton text="Add to Cart" icon="cart3" variant="solid" size="md" onClick={() => handleAction("Add to cart")} /></div>
              <div><CustomButton text="Buy Now" variant="outline" size="md" onClick={() => handleAction("Buy now")} /></div>
            </div>
          </div>
        </article>

        {/* Bottom Related Products Section*/}
        <section className="relatedSection">
  <h3>Related Products</h3>

  <Swiper
    modules={[Navigation, Pagination]}
    spaceBetween={20}
    navigation
    pagination={{ clickable: true }}
    breakpoints={{
      0: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    }}
    className="relatedProductsSwiper"
  >
    {visibleRelated?.map((item) => (
      <SwiperSlide key={item?.id}>
        <div
          className="relatedProductItem"
          onClick={() => {
            navigate(`/products/${item?.id}`);
            window.scrollTo(0, 0);
          }}
        >
          <ProductCardGrid
            product={item}
            isMinimal={true}
            onAddToCart={(clicked) =>
              console.log("Added:", clicked)
            }
          />
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</section>

      </div>
    </Styles>
  );
};

export default ProductDetailsPage;
