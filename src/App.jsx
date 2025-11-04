import { useReducer } from "react";
import Header from "./components/header/Header";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import CarListPage from "./pages/CarListPage";
import AboutUsPage from "./pages/AboutUsPage";
import AddCarPage from "./pages/AddCarPage";
import data from "../public/data/data";


const App = () => {
  const STATE = data

  function reducer(state ,action){
    switch(action.type){
      case 'ADD_CAR': {
        const NEW_CAR = action.payload
        return [...state, NEW_CAR]
      }
      default: 
        return state
    }
  }

  const [carList, dispatch] = useReducer(reducer, STATE)
  
  
  return (
    <main className="container mx-auto px-4 pb-12">
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/car-list" element={<CarListPage carList={carList}/>} />
        <Route path="/type/:type" element={<CarListPage carList={carList}/>}/>
        <Route path="/add-car" element={<AddCarPage dispatch={dispatch}/>} />
        <Route path="/about-us" element={<AboutUsPage/>} />
      </Routes>
    </main>
  )
}
 
export default App;