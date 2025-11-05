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


const App = () => {
  const STATE = {
    listaCompletaAutos: data,
    listaAutosOpcionCompra: []
  }
  
  function reducer(appState ,action){
    console.log("estado", appState)
    switch(action.type){
      case 'ADD_CAR': {
        const NEW_CAR = action.payload
        return {
          ...appState,
          listaCompletaAutos: [...appState.listaCompletaAutos, NEW_CAR]
        }
      }
      case 'ADD_TO_PURCHASE_OPTION': {
        const ID_CAR = action.payload
        const SELECTED_CAR = appState.listaCompletaAutos.find( car => String(car.id) === ID_CAR )
        const UPDATED_LIST = appState.listaCompletaAutos.filter( car => String(car.id) !== ID_CAR)
        console.log('selected car', SELECTED_CAR)
        return {
          ...appState,
          listaCompletaAutos: UPDATED_LIST,
          listaAutosOpcionCompra: [...appState.listaAutosOpcionCompra, SELECTED_CAR]

        }
      }
      case 'REMOVE_FROM_PURCHASE_OPTION':{
        const SELECTED_CAR = action.payload
        console.log(SELECTED_CAR.id)
        const UPDATED_LIST = appState.listaAutosOpcionCompra.filter( car => car.id !== SELECTED_CAR.id)
        return {
          ...appState,
          listaCompletaAutos: [...appState.listaCompletaAutos, SELECTED_CAR],
          listaAutosOpcionCompra: UPDATED_LIST
        }
      }
      default: 
        return appState
    }
  }

  const [carList, dispatch] = useReducer(reducer, STATE)
  
  
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