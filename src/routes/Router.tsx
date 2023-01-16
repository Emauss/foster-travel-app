import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import { IArticle } from "../interfaces/api/IArticle";
import Layout from "../layouts/Layout";
import Home from "../pages/home/Home";

export const Router = () => {
  const [allData, setAllData] = useState<IArticle[]>([]);

  return (
    <DataContext.Provider value={{ allData, setAllData }}>
      <Routes>
        <Route
          path="/"
          element={
            <Layout pageTitle={"Home"}>
              <Home />
            </Layout>
          }
        />
      </Routes>
    </DataContext.Provider>
  );
};
