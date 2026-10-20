// import React from "react";
// import CustomButton from "../../../components/common/custome-button";
// import ProductRating from "../ProductRating";
// import ListStyles from "./styles";
// import { useNavigate } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// import i18next from "i18next";

// const ProductCardList = ({ product, onAddToCart }) => {
//   const currentLang = i18next.language || "ar";
//   const {
//     id,
//     badge,
//     category,
//     name,
//     description,
//     rating,
//     reviewsCount,
//     price,
//     colorBg,
//   } = product;
//   const navigate = useNavigate();
//   // ***************************************

//   const badgeText =
//     badge && typeof badge === "object" ? badge[currentLang] : badge;
//   const categoryText =
//     category && typeof category === "object" ? category[currentLang] : category;
//   const nameText = name && typeof name === "object" ? name[currentLang] : name;
//   const descriptionText =
//     description && typeof description === "object"
//       ? description[currentLang]
//       : description;
//   //*********** ************************************************
//   //Go to the details page
//   const handleDetailsClick = () => {
//     navigate(`/products/${id}`);
//     window.scrollTo(0, 0);
//   };
//   const { t } = useTranslation();
//   return (
//     <ListStyles bgCol={colorBg}>
//       <div className="cardWrapper">
//         {/*Top-opening cube box*/}
//         <div className="imageContainer">
//           {badge && <div className="badge">{badge}</div>}
//           <i className="bi bi-box mainCardListIcon"></i>
//         </div>

//         {/*cardContent */}
//         <div className="cardContent">
//           <p className="categoryText">🔸 {category}</p>
//           <h2 className="productTitle">{name}</h2>
//           <p className="productDescription">{description}</p>

//           <ProductRating rating={rating} reviewsCount={reviewsCount} />
//         </div>
//         <div className="rightSideAction">
//           <p className="priceText">
//             ${price}
//             <span>{t("price_per_month")}</span>
//           </p>

//           <div className="buttonGroup">
//             <CustomButton
//               text={t("btn_details")}
//               variant="outline"
//               size="sm"
//               onClick={handleDetailsClick}
//             />
//             <CustomButton
//               text={t("btn_add")}
//               variant="solid"
//               size="sm"
//               onClick={() => onAddToCart(product)}
//             />
//           </div>
//         </div>
//       </div>
//     </ListStyles>
//   );
// };

// export default ProductCardList;

import React from "react";
import CustomButton from "../../../components/common/custome-button";
import ProductRating from "../ProductRating";
import ListStyles from "./styles";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Badge from "../../badge";

const ProductCardList = ({ product, onAddToCart, isMinimal = false }) => {
  const { i18n, t } = useTranslation();
  const navigate = useNavigate();
  const currentLang = i18n.language || "ar";

  if (!product) return null;

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

  const badgeText =
    badge && typeof badge === "object" ? badge[currentLang] : badge || "";
  const categoryText =
    category && typeof category === "object"
      ? category[currentLang]
      : category || "";
  const nameText =
    name && typeof name === "object" ? name[currentLang] : name || "";
  const descriptionText =
    description && typeof description === "object"
      ? description[currentLang]
      : description || "";

  const badgeClassName =
    typeof badgeText === "string" && badgeText.trim() !== ""
      ? badgeText.toLowerCase().replace(/\s+/g, "-")
      : "";

  // Go to the details page
  const handleDetailsClick = () => {
    navigate(`/products/${id}`);
    window.scrollTo(0, 0);
  };

  return (
    <ListStyles bgCol={colorBg}>
      <div className="cardWrapper">
        {/* Top-opening cube box */}
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

        {/* cardContent */}
        <div className="cardContent">
          <p className="categoryText">🔸 {categoryText}</p>
          <h2 className="productTitle">{nameText}</h2>
          <p className="productDescription">{descriptionText}</p>

          <ProductRating rating={rating} reviewsCount={reviewsCount} />
        </div>

        <div className="rightSideAction">
          <p className="priceText">
            \${price}
            <span>{t("price_per_month")}</span>
          </p>

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
        </div>
      </div>
    </ListStyles>
  );
};

export default ProductCardList;
