import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../categories-preview";
import Category from "../category";
import "./shop.styles.scss";

const Shop = () => {
  return (
    <Routes>
      <Route index Component={CategoriesPreview} />
      <Route path=':category' Component={Category} />
    </Routes>
  );
};

export default Shop;
