import { useParams } from "react-router-dom";

const CarDetailsPage = ({carList, dispatch}) => {
  
  const {id} = useParams()
  const SELECTED_CAR = carList.listaCompletaAutos.find(car => car.id.toString() === id)

  function handlePurchaseOpotion(){
     dispatch({type: 'PURCHASE_OPTION', payload: id})
  }
  return (

    <section>
      {SELECTED_CAR != null ? (
        <button onClick={handlePurchaseOpotion}>Agregar a una lista ql</button>
      ) : (
        <div className="bg-red-100 rounded-md px-5 py-2 text-red-900 md:w-3/5">
          <p className="text-center text-sm">no existe un vehículo con el id <b>{id}</b></p>
        </div>
      )}
    </section>
  )
}
 
export default CarDetailsPage;

