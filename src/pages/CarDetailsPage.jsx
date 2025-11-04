import { useParams } from "react-router-dom";

const CarDetailsPage = ({carList}) => {
  
  const {id} = useParams()
  const SELECTED_CAR = carList.find(car => car.id.toString() === id)
  console.log(SELECTED_CAR)
  return (

    <section>
      {SELECTED_CAR != null ? (
        SELECTED_CAR.modelo
      ) : (
        <div className="bg-red-100 rounded-md px-5 py-2 text-red-900 md:w-3/5">
          <p className="text-center text-sm">no existe un vehículo con el id <b>{id}</b></p>
        </div>
      )}
    </section>
  )
}
 
export default CarDetailsPage;

