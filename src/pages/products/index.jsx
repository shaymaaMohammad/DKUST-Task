// import React, { useState } from "react";
// import productsArray from "../../data/productsData";
// import ProductCardGrid from "../../components/ProductCard/prodcutCardGrid";
// import ProductCardList from "../../components/ProductCard/prodcutCardList";
// import ProductDetailsPage from "../productDetails";
// import PageStyles from "./styles";
// import InputProvider from "../../components/common/inputs/input-provider";
// import { InputTypes } from "../../constants/enums";
// import Hero from "../../components/hero";
// import { useTranslation } from "react-i18next";
// import AppTemplate from "../../components/app-template";

// const ProductsPage = () => {
//   const [viewMode, setViewMode] = useState("grid");
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [sortBy, setSortBy] = useState("default");
//   const { t } = useTranslation(); // 2. تفعيل خطاف الترجمة

//   let filteredProducts =
//     selectedCategory === "All"
//       ? productsArray
//       : productsArray?.filter(
//           (product) => product?.category === selectedCategory,
//         );

//   if (sortBy === "price-low") {
//     filteredProducts = [...filteredProducts]?.sort((a, b) => a.price - b.price);
//   } else if (sortBy === "price-high") {
//     filteredProducts = [...filteredProducts]?.sort((a, b) => b.price - a.price);
//   } else if (sortBy === "top-by") {
//     filteredProducts = [...filteredProducts]?.sort(
//       (a, b) => b.rating - a.rating,
//     );
//   }

//   const sortOptions = [
//     { value: "default", label: t("sort_default") },
//     { value: "price-low", label: t("sort_price_low") },
//     { value: "price-high", label: t("sort_price_high") },
//     { value: "top-by", label: t("sort_top_rated") },
//   ];

//   const categories = [
//     "All",
//     "Software",
//     "AI",
//     "Hardware",
//     "Robotics",
//     "Security",
//   ];

//   const addToCart = (product) => {
//     console.log("Add to cart:", product);
//   };

//   return (
//     <AppTemplate pageTitle="Products">
//       <PageStyles>
//         <div>
//           {/* Hero Section*/}
//           <Hero
//             title={t("products_hero_title")}
//             description={t("products_hero_desc")}
//             variant="products"
//           />

//           <div className="hero-section">
//             <div className="mainContentWrapper">
//               {/* Toolbar Row */}
//               <div className="toolbarRow">
//                 {/* Filter Buttons */}
//                 <div className="filterBar">
//                   {categories?.map((category) => (
//                     <button
//                       key={category}
//                       className={selectedCategory === category ? "active" : ""}
//                       onClick={() => setSelectedCategory(category)}
//                     >
//                       {t(`category_${category.toLowerCase()}`)}
//                     </button>
//                   ))}
//                 </div>

//                 {/* Dropdown controls & Toggle views */}
//                 <div className="rightControls">
//                   <InputProvider
//                     type={InputTypes.SELECT}
//                     fieldValue={sortBy}
//                     onChangeFunction={setSortBy}
//                     options={sortOptions}
//                     className="sortSelect"
//                   />

//                   <div className="viewToggleGroup">
//                     <button
//                       className={viewMode === "grid" ? "active" : ""}
//                       onClick={() => setViewMode("grid")}
//                       title={t("tooltip_grid_view")}
//                     >
//                       <i className="bi bi-grid-3x3-gap-fill"></i>
//                     </button>
//                     <button
//                       className={viewMode === "list" ? "active" : ""}
//                       onClick={() => setViewMode("list")}
//                       title={t("tooltip_list_view")}
//                     >
//                       <i className="bi bi-list"></i>
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               {/* productCount */}
//               <p className="productCountText">
//                 {filteredProducts?.length}{" "}
//                 {filteredProducts?.length === 1
//                   ? t("product_single")
//                   : t("product_plural")}{" "}
//                 {t("products_found")}
//               </p>

//               {filteredProducts?.length === 0 ? (
//                 <div className="no-product text-center py-5 w-100">
//                   <h3>{t("details_no_product_found")}</h3>
//                 </div>
//               ) : viewMode === "grid" ? (
//                 <div className="row row-cols-1 row-cols-md-3 g-4 ">
//                   {filteredProducts?.map((product) => (
//                     <div
//                       key={product?.id}
//                       className="col d-flex align-items-stretch"
//                     >
//                       <ProductCardGrid
//                         product={product}
//                         onAddToCart={addToCart}
//                       />
//                     </div>
//                   ))}
//                 </div>
//               ) : (
//                 <div className="w-100">
//                   {filteredProducts?.map((product) => (
//                     <ProductCardList
//                       key={product?.id}
//                       product={product}
//                       onAddToCart={addToCart}
//                     />
//                   ))}
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </PageStyles>
//     </AppTemplate>
//   );
// };

// export default ProductsPage;

import React, { useState } from "react";
import productsArray from "../../data/productsData";
import ProductCardGrid from "../../components/ProductCard/prodcutCardGrid";
import ProductCardList from "../../components/ProductCard/prodcutCardList"; // تذكر تحديث هذا الملف داخلياً إذا اخترت عرض الـ List
import PageStyles from "./styles";
import InputProvider from "../../components/common/inputs/input-provider";
import { InputTypes } from "../../constants/enums";
import Hero from "../../components/hero";
import { useTranslation } from "react-i18next";
import AppTemplate from "../../components/app-template";

const ProductsPage = () => {
  const [viewMode, setViewMode] = useState("grid");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || "ar";

  // تصفية المنتجات مع فك كائن الـ category المترجم بأمان
  let filteredProducts =
    selectedCategory === "All"
      ? productsArray
      : productsArray?.filter((product) => {
          const catText =
            product?.category && typeof product.category === "object"
              ? product.category[currentLang]
              : product?.category;
          return catText === selectedCategory;
        });

  // الترتيب بأمان وحماية الكائنات من العمليات الحسابية مباشر
  if (sortBy === "price-low") {
    filteredProducts = [...(filteredProducts || [])]?.sort((a, b) => {
      const priceA =
        a?.price && typeof a.price === "object"
          ? parseFloat(a.price[currentLang])
          : parseFloat(a?.price);
      const priceB =
        b?.price && typeof b.price === "object"
          ? parseFloat(b.price[currentLang])
          : parseFloat(b?.price);
      return (priceA || 0) - (priceB || 0);
    });
  } else if (sortBy === "price-high") {
    filteredProducts = [...(filteredProducts || [])]?.sort((a, b) => {
      const priceA =
        a?.price && typeof a.price === "object"
          ? parseFloat(a.price[currentLang])
          : parseFloat(a?.price);
      const priceB =
        b?.price && typeof b.price === "object"
          ? parseFloat(b.price[currentLang])
          : parseFloat(b?.price);
      return (priceB || 0) - (priceA || 0);
    });
  } else if (sortBy === "top-by") {
    filteredProducts = [...(filteredProducts || [])]?.sort((a, b) => {
      const ratingA =
        a?.rating && typeof a.rating === "object"
          ? parseFloat(a.rating[currentLang])
          : parseFloat(a?.rating);
      const ratingB =
        b?.rating && typeof b.rating === "object"
          ? parseFloat(b.rating[currentLang])
          : parseFloat(b?.rating);
      return (ratingB || 0) - (ratingA || 0);
    });
  }

  const sortOptions = [
    { value: "default", label: t("sort_default") },
    { value: "price-low", label: t("sort_price_low") },
    { value: "price-high", label: t("sort_price_high") },
    { value: "top-by", label: t("sort_top_rated") },
  ];

  const categories = [
    "All",
    "Software",
    "AI",
    "Hardware",
    "Robotics",
    "Security",
  ];

  const addToCart = (product) => {
    console.log("Add to cart:", product);
  };

  return (
    <AppTemplate pageTitle="Products">
      <PageStyles>
        <div>
          {/* Hero Section*/}
          <Hero
            title={t("products_hero_title")}
            description={t("products_hero_desc")}
            variant="products"
          />

          <div className="hero-section">
            <div className="mainContentWrapper">
              {/* Toolbar Row */}
              <div className="toolbarRow">
                {/* Filter Buttons */}
                <div className="filterBar">
                  {categories?.map((category) => (
                    <button
                      key={category}
                      className={selectedCategory === category ? "active" : ""}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {t(`category_${category.toLowerCase()}`)}
                    </button>
                  ))}
                </div>

                {/* Dropdown controls & Toggle views */}
                <div className="rightControls">
                  <InputProvider
                    type={InputTypes.SELECT}
                    fieldValue={sortBy}
                    onChangeFunction={setSortBy}
                    options={sortOptions}
                    className="sortSelect"
                  />

                  <div className="viewToggleGroup">
                    <button
                      className={viewMode === "grid" ? "active" : ""}
                      onClick={() => setViewMode("grid")}
                      title={t("tooltip_grid_view")}
                    >
                      <i className="bi bi-grid-3x3-gap-fill"></i>
                    </button>
                    <button
                      className={viewMode === "list" ? "active" : ""}
                      onClick={() => setViewMode("list")}
                      title={t("tooltip_list_view")}
                    >
                      <i className="bi bi-list"></i>
                    </button>
                  </div>
                </div>
              </div>

              {/* productCount */}
              <p className="productCountText">
                {filteredProducts?.length}{" "}
                {filteredProducts?.length === 1
                  ? t("product_single")
                  : t("product_plural")}{" "}
                {t("products_found")}
              </p>

              {filteredProducts?.length === 0 ? (
                <div className="no-product text-center py-5 w-100">
                  <h3>{t("details_no_product_found")}</h3>
                </div>
              ) : viewMode === "grid" ? (
                <div className="row row-cols-1 row-cols-md-3 g-4 ">
                  {filteredProducts?.map((product) => (
                    <div
                      key={product?.id}
                      className="col d-flex align-items-stretch"
                    >
                      <ProductCardGrid
                        product={product}
                        onAddToCart={addToCart}
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="w-100">
                  {filteredProducts?.map((product) => (
                    <ProductCardList
                      key={product?.id}
                      product={product}
                      onAddToCart={addToCart}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </PageStyles>
    </AppTemplate>
  );
};

export default ProductsPage;
