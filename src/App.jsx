import { useReducer } from "react";
import Header from "./components/header/Header";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import CarListPage from "./pages/CarListPage";
import CarListPurchaseOptionPage from "./pages/CarListPurchaseOptionPage";
import CarDetailsPage from "./pages/CarDetailsPage";
import AboutUsPage from "./pages/AboutUsPage";
import AddCarPage from "./pages/AddCarPage";
import data from "../public/data/data";
import carReducer from "./reducers/car-reducer";


const App = () => {
  const STATE = {
    listaCompletaAutos: data,
    listaAutosOpcionCompra: []
  }
  
  

  const [carList, dispatch] = useReducer(carReducer, STATE)
  
  
  return (
    <main className="container mx-auto px-4 pb-12">
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/car-list" element={<CarListPage carList={carList}/>} />
        <Route path="/car-list/:id" element={<CarDetailsPage carList={carList} dispatch={dispatch}/>} />
        <Route path="/type/:type" element={<CarListPage carList={carList}/>}/>
        <Route path="/purchase-option" element={<CarListPurchaseOptionPage carList={carList} dispatch={dispatch} />} />
        <Route path="/add-car" element={<AddCarPage dispatch={dispatch}/>} />
        <Route path="/about-us" element={<AboutUsPage/>} />
      </Routes>
    </main>
  )
}
 
export default App;