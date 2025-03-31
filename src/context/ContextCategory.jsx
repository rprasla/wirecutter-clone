import React, { createContext, useState, useContext } from "react";


const CategoryContext = createContext();


export const CategoryProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");


  const setCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <CategoryContext.Provider value={{ selectedCategory, setCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};


export const useCategory = () => {
  return useContext(CategoryContext);
};
