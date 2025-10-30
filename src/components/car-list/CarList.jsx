import { useReducer, useRef } from "react";
import data from "../../../public/data/data";
import "./CarList.sass"

const CarList = ({carType}) => {

  const INITIAL_STATE = data

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

  const [carList, dispatch] = useReducer(reducer, INITIAL_STATE)
  const inputRef = useRef()


  const filteredCars = carType 
    ? carList.filter(car => car.tipo.toLowerCase() === carType.toLowerCase())
    : carList;


  function handleAddCar(event){
    event.preventDefault()
    const nameCar = inputRef.current.value
    const carId = 123312
    const carTipo = 'Hatchback'
    const newCar = {
      id: carId,
      marca: nameCar,
      tipo: carTipo
    }

    dispatch({type: 'ADD_CAR', payload: newCar})
    inputRef.current.value = ''
  }

  return ( 
    <section className="car-list">
      {filteredCars.length > 0 ? (
        filteredCars.map(car => (
          <article key={car.id} className="car-list__car">
            <h3 className="car-list__car__brand">{car.marca}</h3>
            <h6 className="car-list__car__model">{car.modelo}</h6>
            <span className="car-list__car__type">{car.tipo}</span>
          </article>
        ))
      ) : (
        <p>No se encontraron autos de tipo "{carType}"</p>
      )}


      <form onSubmit={handleAddCar}>
        <label htmlFor="caca" ref={inputRef}>Agregar auto</label>
        <input id="caca" ref={inputRef}/>
        <button>Agregar auto ql</button>
      </form>
    </section>

  );
}
 
export default CarList;