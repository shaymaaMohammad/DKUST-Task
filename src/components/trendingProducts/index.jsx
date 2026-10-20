import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import ProductCardGrid from "../ProductCard/prodcutCardGrid";
import ProductsSectionStyles from "./styles";
import "swiper/css";
import "swiper/css/pagination";
import productsArray from "../../data/productsData";

const TrendingProducts = () => {
  // Function to add a product to the cart.
  const handleAddToCart = (product) => {
    console.log("Added to cart:", product);
  };

  return (
    <ProductsSectionStyles>
      <div className="products-container">
        <div className="header-row">
          <div className="title-block">
            <h4>Check What's New</h4>
            <h2>Trending Products</h2>
          </div>
          <a href="/products" className="view-all-btn">
            View All
          </a>
        </div>

        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={3}
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {/**/}
          {productsArray.map((product) => (
            <SwiperSlide key={product.id}>
              {/*  */}
              <ProductCardGrid
                product={product}
                onAddToCart={handleAddToCart}
                isMinimal={false}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </ProductsSectionStyles>
  );
};

export default TrendingProducts;
