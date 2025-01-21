import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { getCategoriesAndDocuments } from "../../utils/firebase.utils.js";
import { setCategories } from "../../store/categories/category.action.js";
import CategoriesPreview from "../categories-preview";
import Category from "../category";
import "./shop.styles.scss";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments('categories');
      console.log(categoriesArray);
      dispatch(setCategories(categoriesArray));
    };

    getCategoriesMap();
  }, [dispatch])

  return (
    <Routes>
      <Route index Component={CategoriesPreview} />
      <Route path=':category' Component={Category} />
    </Routes>
  );
};

export default Shop;
