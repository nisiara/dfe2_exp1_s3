import { useParams, Link } from "react-router-dom";
import { PageTitle } from "../components/common/Common";

const CarDetailsPage = ({carList, dispatch}) => {
  
  const {id} = useParams()
  const SELECTED_CAR = carList.listaCompletaAutos.find(car => car.id.toString() === id)
  const FIND_IN_LIST = carList.listaAutosOpcionCompra.find(car => car.id.toString() === id)

  function handlePurchaseOpotion(){
     dispatch({type: 'ADD_TO_PURCHASE_OPTION', payload: id})
  }
  return (

    <section>
      <PageTitle title='Detalle Vehículo'/>
      {SELECTED_CAR != null ? (
        <>
          <article className="even:bg-indigo-50 rounded-md p-2">
            <h3 className="text-lg font-bold mb-5 capitalize">{SELECTED_CAR.marca}</h3>
            <h6 className="text-xs font-semibold border-b border-b-slate-300 mb-2 pb-1 capitalize">{SELECTED_CAR.modelo}</h6>
            <span className="text-xs rounded-sm bg-indigo-200 py-1 px-2 font-normal capitalize">{SELECTED_CAR.tipo}</span>
            
            <button onClick={handlePurchaseOpotion} className="text-xs mt-2 block underline">Agregar a lista 'Opciones de Compra'</button>
          </article>
          <Link to="/car-list" className="mt-5 block text-sm text-center">Volver a la <span className="underline">Lista de Vehículos</span></Link>
        </>
      ) : (
        <div className={`rounded-md px-5 py-2 md:w-3/5 ${FIND_IN_LIST ? 'bg-green-100 text-green-900 ' : 'bg-red-100 text-red-900 '}`}>
          <p className="text-center text-sm">
            {FIND_IN_LIST ? 'El vehículo ha sido guardado en la lista "Opciones de Compra"' : `El vehículo con el id: ${id} no existe.`}
          </p>
        </div>
      )}
    </section>
  )
}
 
export default CarDetailsPage;

