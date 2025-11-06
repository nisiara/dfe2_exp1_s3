import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const HomePage = React.lazy(() => import("../pages/HomePage"));
const CarListPage = React.lazy(() => import("../pages/CarListPage"));
const CarDetailsPage = React.lazy(() => import("../pages/CarDetailsPage"));
const CarListPurchaseOptionPage = React.lazy(() => import("../pages/CarListPurchaseOptionPage"));
const AddCarPage = React.lazy(() => import("../pages/AddCarPage"));
const AboutUsPage = React.lazy(() => import("../pages/AboutUsPage"));

const AppRoutes = ({ carList, dispatch }) => {

  return (
    <Suspense fallback={<div className="p-4">Cargando...</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/car-list" element={<CarListPage carList={carList} dispatch={dispatch} />} />
        <Route path="/car-list/:id" element={<CarDetailsPage carList={carList} dispatch={dispatch} />} />
        <Route path="/type/:type" element={<CarListPage carList={carList} dispatch={dispatch} />} />
        <Route path="/purchase-option" element={<CarListPurchaseOptionPage carList={carList} dispatch={dispatch} />} />
        <Route path="/add-car" element={<AddCarPage dispatch={dispatch} />} />
        <Route path="/about-us" element={<AboutUsPage />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;