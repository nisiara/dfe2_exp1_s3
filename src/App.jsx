import { useReducer } from "react";
import Header from "./components/header/Header";
import AppRoutes from "./routes/AppRoutes";
import data from "../public/data/data";
import carReducer from "./reducers/car-reducer";
import Footer from "./components/footer/Footer";


const App = () => {
  const STATE = {
    listaCompletaAutos: data,
    listaAutosOpcionCompra: [],
    listaAutosFiltrados: data,
    filterValues: {
      marca: '',
      tipo: ''
    }
  }

  const [carList, dispatch] = useReducer(carReducer, STATE)
  
  return (
    <main className="container mx-auto px-4">
      <Header/>
      <AppRoutes carList={carList} dispatch={dispatch} />
      <Footer/>
    </main>
  )
}
 
export default App;