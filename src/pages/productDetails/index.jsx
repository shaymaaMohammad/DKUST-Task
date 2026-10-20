import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import ProductRating from "../../components/ProductCard/ProductRating";
import CustomButton from "../../components/common/custome-button";
import ProductCardGrid from "../../components/ProductCard/prodcutCardGrid";
import productsArray from "../../data/productsData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useTranslation } from "react-i18next";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Styles from "./styles";
import AppTemplate from "../../components/app-template";

const ProductFeatures = ({ features }) => {
  if (!features || !Array.isArray(features)) return null;
  return (
    <ul className="featureList">
      {features.map((featureText, index) => (
        <li key={index}>
          <i className="bi bi-check-circle"></i>
          {featureText}
        </li>
      ))}
    </ul>
  );
};

const ProductDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const { t, i18n } = useTranslation();

  const activeLanguage = i18n.language || "ar";

  const product = productsArray?.find(
    (item) => String(item?.id) === String(id),
  );

  if (!product) {
    return (
      <Styles>
        <div className="container productDetailsContainer pb-5 text-center errorContainer">
          <i className="bi bi-exclamation-circle errorIcon"></i>
          <h2 className="errorTitle">{t("details_no_product_found")}</h2>
          <CustomButton
            text={t("details_btn_back_to_products")}
            variant="solid"
            onClick={() => navigate("/products")}
          />
        </div>
      </Styles>
    );
  }

  const handleAction = (actionType) => {
    console.log(`${actionType}:`, { ...product, quantity });
  };

  const sameCategoryProducts = productsArray?.filter((item) => {
    return (
      item?.category?.[activeLanguage] ===
        product?.category?.[activeLanguage] &&
      String(item?.id) !== String(product?.id)
    );
  });

  const otherCategoryProducts = productsArray?.filter((item) => {
    return (
      item?.category?.[activeLanguage] !==
        product?.category?.[activeLanguage] &&
      String(item?.id) !== String(product?.id)
    );
  });

  const visibleRelated = [
    ...sameCategoryProducts,
    ...otherCategoryProducts,
  ].slice(0, 3);

  return (
    <AppTemplate pageTitle="Product-details">
      <Styles bgCol={product?.colorBg}>
        {/* breadcrumb */}
        <div className="breadcrumbContainer">
          <div className="container">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link to="/">{t("nav_home")}</Link>
              <span> / </span>
              <Link to="/products">{t("nav_products")}</Link>
              <span> / </span>

              <span className="current-product">
                {product?.name?.[activeLanguage]}
              </span>
            </nav>
          </div>
        </div>

        {/* backLinkSection */}
        <div className="backLinkSection">
          <div className="container">
            <div className="backLinkRow">
              <Link to="/products">
                {t("details_back_link_arrow")}{" "}
                {t("details_btn_back_to_products")}
              </Link>
            </div>
          </div>
        </div>

        <div className="container pb-5">
          <article className="productDetailCard row g-0">
            {/* Left Block: Cube image and badge */}
            <div
              className="productVisual col-12 col-md-6"
              style={{ backgroundColor: product?.colorBg }}
            >
              <i className="bi bi-box mainVisualIcon"></i>

              {product?.badge?.[activeLanguage] && (
                <span className="visualBadge">
                  {product.badge[activeLanguage]}
                </span>
              )}
            </div>

            {/* Right Block: productInfo */}
            <div className="productInfo col-12 col-md-6">
              <span className="categoryTag">
                {" "}
                {product?.category?.[activeLanguage]}
              </span>
              <h2>{product?.name?.[activeLanguage]}</h2>

              <div className="ratingRow">
                <ProductRating
                  rating={product?.rating}
                  reviewsCount={product?.reviewsCount}
                />
              </div>

              <p className="description">
                {product?.description?.[activeLanguage]}
              </p>

              <ProductFeatures features={product?.features?.[activeLanguage]} />

              <div className="priceRow">
                <span className="amount">\${product?.price}</span>
                <span className="period">{t("price_per_month")}</span>
              </div>

              {/* Quantity control buttons */}
              <div className="quantityRow">
                <span className="qty-label">{t("details_qty_label")}</span>
                <div className="qtySelector">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    disabled={quantity === 1}
                  >
                    -
                  </button>
                  <input type="text" value={quantity} readOnly />
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => q + 1)}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="actionRow d-flex align-items-center gap-3">
                <div className="flex-grow-1">
                  <CustomButton
                    text={t("details_btn_add_to_cart")}
                    icon="cart3"
                    variant="solid"
                    size="md"
                    onClick={() => handleAction("Add to cart")}
                  />
                </div>
                <div>
                  <CustomButton
                    text={t("details_btn_buy_now")}
                    variant="outline"
                    size="md"
                    onClick={() => handleAction("Buy now")}
                  />
                </div>
              </div>
            </div>
          </article>

          {/* Bottom Related Products Section */}
          <section className="relatedSection">
            <h3>{t("details_related_products_title")}</h3>

            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              navigation
              pagination={{ clickable: true }}
              breakpoints={{
                0: { slidesPerView: 1 },
                576: { slidesPerView: 2 },
                992: { slidesPerView: 3 },
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
                      onAddToCart={() =>
                        handleAction("Add to cart from related")
                      }
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </section>
        </div>
      </Styles>
    </AppTemplate>
  );
};

export default ProductDetailsPage;
