import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CarListPage from "../pages/CarListPage";
import CarDetailsPage from "../pages/CarDetailsPage"
import CarListPurchaseOptionPage from "../pages/CarListPurchaseOptionPage";
import AddCarPage from "../pages/AddCarPage";
import AboutUsPage from "../pages/AboutUsPage";


const AppRoutes = ({carList, dispatch}) => {
  return ( 
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/car-list" element={<CarListPage carList={carList}/>} />
      <Route path="/car-list/:id" element={<CarDetailsPage carList={carList} dispatch={dispatch}/>} />
      <Route path="/type/:type" element={<CarListPage carList={carList}/>}/>
      <Route path="/purchase-option" element={<CarListPurchaseOptionPage carList={carList} dispatch={dispatch} />} />
      <Route path="/add-car" element={<AddCarPage dispatch={dispatch}/>} />
      <Route path="/about-us" element={<AboutUsPage/>} />
    </Routes>
   );
}
 
export default AppRoutes;