import CarList from "../components/car-list/CarList";
import {PageTitle} from "../components/common/Common"
import { Select } from "../components/form/Form"


const CarListPage = ({carList, dispatch}) => {
  const uniqueBrandList = Array.from(new Set(carList.listaCompletaAutos.map(car => car.marca)))
  const uniqueTypeList = Array.from(new Set(carList.listaCompletaAutos.map(car => car.tipo)))

  function handleFilterChange(event){
    const { name, value } = event.target;
    dispatch({
      type: 'APPLY_FILTER',
      payload: {
        type: name,
        value: value
      }
    });
  }

  return (
    <section>
      <PageTitle title='Lista Vehículos'/>
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-10">
        <aside className="col-span-1 sm:col-span-4 lg:col-span-3">
          <Select allOption firstOption="Todos las marcas" label="Marca" name="marca" options={uniqueBrandList} value={carList.filterValues.marca} onChange={(event) => handleFilterChange(event)}/>
          <Select allOption firstOption="Todos los tipos" label="Tipo" name="tipo" options={uniqueTypeList} value={carList.filterValues.tipo} onChange={(event) => handleFilterChange(event)}/>
        </aside>
        <div className="col-span-1 sm:col-span-8 lg:col-span-9">
          <CarList carList={carList} />
        </div>
      </div>
    </section>
  )
 
}
 
export default CarListPage;