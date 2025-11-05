import { useParams } from "react-router-dom";

const CarDetailsPage = ({carList, dispatch}) => {
  
  const {id} = useParams()
  const SELECTED_CAR = carList.listaCompletaAutos.find(car => car.id.toString() === id)

  function handlePurchaseOpotion(){
     dispatch({type: 'ADD_TO_PURCHASE_OPTION', payload: id})
  }
  return (

    <section>
      {SELECTED_CAR != null ? (
        <article className="odd:bg-indigo-50 rounded-md p-2">
          <h3 className="text-lg font-bold mb-5 capitalize">{SELECTED_CAR.marca}</h3>
          <h6 className="text-xs font-semibold border-b border-b-slate-300 mb-2 pb-1 capitalize">{SELECTED_CAR.modelo}</h6>
          <span className="text-xs rounded-sm bg-indigo-200 py-1 px-2 font-normal capitalize">{SELECTED_CAR.tipo}</span>
          
          <button onClick={handlePurchaseOpotion} className="text-xs mt-2 block underline">Agregar a lista 'Opciones de Compra'</button>
        </article>
      ) : (
        <div className="bg-red-100 rounded-md px-5 py-2 text-red-900 md:w-3/5">
          <p className="text-center text-sm">No existe un vehículo con el id <b>{id}</b></p>
        </div>
      )}
    </section>
  )
}
 
export default CarDetailsPage;

