import React from "react";
import CustomButton from "../../../components/common/custome-button";
import ProductRating from "../ProductRating";
import { useNavigate } from "react-router-dom";
import ProductStyles from "./styles";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import Badge from "../../badge";

const ProductCardGrid = ({ product, onAddToCart, isMinimal = false }) => {
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
  const currentLang = i18next.language || "ar";
  const navigate = useNavigate();

  const badgeText =
    badge && typeof badge === "object" ? badge[currentLang] : badge;
  const categoryText =
    category && typeof category === "object" ? category[currentLang] : category;
  const nameText = name && typeof name === "object" ? name[currentLang] : name;
  const descriptionText =
    description && typeof description === "object"
      ? description[currentLang]
      : description;

  const badgeClassName =
    badgeText && typeof badgeText === "string"
      ? badgeText.toLowerCase().replace(/\s+/g, "-")
      : "";

  // Go to the details page.
  const handleDetailsClick = () => {
    navigate(`/products/${id}`);
    window.scrollTo(0, 0);
  };

  const { t } = useTranslation();
  return (
    <ProductStyles bgCol={colorBg}>
      <div className={`cardWrapper ${isMinimal ? "minimalCard" : ""}`}>
        {/* Product visual area */}
        <div className="imageContainer">
          {badgeText && !isMinimal && (
            <Badge
              text={badgeText}
              variant="product"
              className={badgeClassName}
            />
          )}
          <i className="bi bi-box mainCardGridIcon"></i>
        </div>

        {/* Product content */}
        <div className="cardContent">
          <p className="categoryText">🔸 {categoryText}</p>

          <h3 className="productTitle">{nameText}</h3>

          {!isMinimal && (
            <>
              <p className="productDescription">{descriptionText}</p>

              <ProductRating rating={rating} reviewsCount={reviewsCount} />
            </>
          )}

          <div className="cardFooter">
            <div className="priceText">
              \${price}
              <span>{t("price_per_month")}</span>
            </div>

            {!isMinimal && (
              <div className="buttonGroup">
                <CustomButton
                  text={t("btn_details")}
                  variant="outline"
                  size="sm"
                  onClick={handleDetailsClick}
                />

                <CustomButton
                  text={t("btn_add")}
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
