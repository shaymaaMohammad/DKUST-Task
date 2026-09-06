import React, { useState } from 'react';
import productsArray from '../../data/productsData';
import ProductCardGrid from '../../components/ProductCard/prodcutCardGrid';
import ProductCardList from '../../components/ProductCard/prodcutCardList'; 
import ProductDetailsPage from '../productDetails';
import PageStyles  from './styles'; 
import InputProvider from '../../components/common/inputs/input-provider';
import { InputTypes } from '../../constants/enums';
const ProductsPage = () => {
  const [viewMode, setViewMode] = useState("grid"); // The display starts in grid view.
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");

  // Filtering logic based on the selected section
  let filteredProducts = selectedCategory === "All"
    ? productsArray 
    : productsArray?.filter(product => product?.category === selectedCategory);

  // Smart sorting logic based on price (low to high or vice versa)
  if (sortBy === "price-low") {
    filteredProducts = [...filteredProducts]?.sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-high") {
    filteredProducts = [...filteredProducts]?.sort((a, b) => b.price - a.price);
  }
  else if (sortBy === "top-by"){
    filteredProducts = [...filteredProducts]?.sort((a, b) => b.rating - a.rating);
  }
const sortOptions = [
  {
    value: "default",
    label: "Sort: Default"
  },
  {
    value: "price-low",
    label: "Price: Low to High"
  },
  {
    value: "price-high",
    label: "Price: High to Low"
  },
  {
    value: "top-by",
    label: "Top Rated"
  }
];
  /* Dynamically extracting unique categories from the product array (using a `Set`) is one approach, 
  but it doesn't suit the current code—removing a category would cause the corresponding button to disappear.
   That is why I opted for the fixed-name method, 
   though I included the dynamic approach here because I liked it.
  //const categories = ["All", ...new Set(productsArray?.map(product => product.category))];*/
 //Manually fixing section names ensures the buttons always remain in place, even if they are empty.
  const categories = ["All", "Software", "AI", "Hardware", "Robotics", "Security"];

  const addToCart = (product) => {
    console.log("Add to cart:", product);
  };

  return (
    <PageStyles>
    <div>
      {/* Upper Deeeeeeeeeeeeeeeev*/}
      <div className="topHeaderBg">
        <div className="headerContainer">
          <h1>Our Products</h1>
          <p>Explore our range of software, AI tools, hardware kits, and robotics solutions built for modern teams.</p>
        </div>
      </div>

      {/* Main content container*/}
      <div className="mainContentWrapper">
        
        {/*  Tooooooooolbaaaaaar*/}
        <div className="toolbarRow">
          
          {/* Filter Butttttons */}
          <div className="filterBar">
            {categories?.map((category) => (
              <button
                key={category}
                className={selectedCategory === category ? "active" : ""}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Dropdownnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn*/}
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
                className={viewMode === 'grid' ? 'active' : ''} 
                onClick={() => setViewMode('grid')}
                title="Grid View"
              >
                <i className="bi bi-grid-3x3-gap-fill"></i>
              </button>
              <button 
                className={viewMode === 'list' ? 'active' : ''} 
                onClick={() => setViewMode('list')}
                title="List View"
              >
                <i className="bi bi-list"></i>
              </button>
            </div>
          </div>

        </div>

        {/*  Number of products */}
        <p className="productCountText">
  {filteredProducts?.length} {filteredProducts?.length === 1 ? 'product' : 'products'}  found
</p>


        {/* The interchangeable display container based on the current viewMode.*/}
        {filteredProducts?.length === 0 ? (
  
  <div className="text-center py-5 w-100">
    <h3 style={{ color: '#888', fontWeight: '500' }}>No products found</h3>
  </div>
) : viewMode === 'grid' ? (
  
  <div className="row row-cols-1 row-cols-md-3 g-4 ">
    {filteredProducts?.map((product) => (
      <div key={product?.id} className="col d-flex align-items-stretch">
        <ProductCardGrid product={product} onAddToCart={addToCart} />
      </div>
    ))}
  </div>
) : (
  
  <div className="w-100">
    {filteredProducts?.map((product) => (
      <ProductCardList key={product?.id} product={product} onAddToCart={addToCart} />
    ))}
  </div>
)}

      </div>
    </div>
    </PageStyles>
  );
};

export default ProductsPage;
