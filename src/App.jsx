import { useReducer } from "react";
import Header from "./components/header/Header";
import AppRoutes from "./routes/AppRoutes";
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
      <AppRoutes carList={carList} dispatch={dispatch} />
    </main>
  )
}
 
export default App;