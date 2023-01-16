import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import { IArticle } from "../interfaces/api/IArticle";
import { IFiltersValue } from "../interfaces/filters/IFiltersValue";
import Layout from "../layouts/Layout";
import Home from "../pages/home/Home";

export const Router = () => {
  const storedFilters: string | null = window.localStorage.getItem("filters");
  const [allData, setAllData] = useState<IArticle[]>([]);
  const [filters, setFilters] = useState<IFiltersValue>(storedFilters ? JSON.parse(storedFilters) : { country: "pl", pageSize: 10 });

  return (
    <DataContext.Provider value={{ allData, setAllData, filters, setFilters }}>
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
