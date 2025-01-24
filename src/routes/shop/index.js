import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { fetchCategories } from "../../store/categories/category.action.js";
import CategoriesPreview from "../categories-preview";
import Category from "../category";
import "./shop.styles.scss";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <Routes>
      <Route index Component={CategoriesPreview} />
      <Route path=':category' Component={Category} />
    </Routes>
  );
};

export default Shop;
