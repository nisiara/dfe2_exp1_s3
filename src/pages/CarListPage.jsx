import CarList from "../components/car-list/CarList";
import {PageTitle} from "../components/common/Common"
import { Select } from "../components/form/Form";

const CarListPage = ({carList, dispatch}) => {

  const uniqueBrandList = Array.from(new Set(carList.listaCompletaAutos.map(car => car.marca)))
  const uniqueTypeList = Array.from(new Set(carList.listaCompletaAutos.map(car => car.tipo)))

  function handleFilterChange(event){
    dispatch({
      type: 'APPLY_FILTER',
      payload: {
        type: event.target.name,
        value: event.target.value
      }
    })
  }


  return (
    <section>
      <PageTitle title='Listado de autos'/>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        <aside className="col-span-1 md:col-span-2">
          <Select all label="Marca" name="marca" options={uniqueBrandList} onChange={(event) => handleFilterChange(event)}/>
          <Select all label="Tipo" name="tipo" options={uniqueTypeList} onChange={(event) => handleFilterChange(event)}/>
        </aside>
        <div className="col-span-1 md:col-span-10">
          <CarList carList={carList} />
        </div>
      </div>
    </section>
  )
 
}
 
export default CarListPage;