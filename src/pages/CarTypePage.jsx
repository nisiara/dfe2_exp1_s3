import { useParams, NavLink } from "react-router-dom";
import CarList from "../components/car-list/CarList";
import {PageTitle} from "../components/common/Common"

const CarTypePage = ({carList}) => {
  const carsByType = Object.groupBy(carList, auto => auto.tipo);
  const carTypes = Object.keys(carsByType);
  const {type} = useParams()

  return (
    <section>
      <PageTitle title='Listado de autos'/>
      <div className="grid grid-cols-12 gap-10">
        <aside className="col-span-2">
          <nav> 
            <ul className="flex flex-col gap-4">
              {carTypes.map(type => (
                <li key={type}>
                  <NavLink to={`/type/${type.toLowerCase()}`} className={({isActive}) => `capitalize text-sm px-2 py-1 block font-medium ${isActive ? 'border-b-2 border-b-slate-600' : ''}`}>{type}</NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <div className="col-span-10">
          <CarList carList={carList} carType={type}/>
        </div>
      </div>
    </section>
  )
 
}
 
export default CarTypePage;