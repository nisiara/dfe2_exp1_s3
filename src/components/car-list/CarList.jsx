import { Link } from "react-router-dom";

const CarList = ({carList}) => {

  const RENDER_CAR_LIST = carList.listaAutosFiltrados.length > 0
    ? carList.listaAutosFiltrados
    : carList.listaCompletaAutos;

  const gridClasses = carList.listaCompletaAutos.length > 0
    ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
    : 'grid sm:gap-6';

  return ( 
    <>
      <div className={gridClasses}>
        {RENDER_CAR_LIST.map(car => (
          <Link to={`/car-list/${car.id}`} key={car.id} className="odd:bg-indigo-50 rounded-md p-2">
            <h3 className="text-lg font-bold mb-5 capitalize">{car.marca}</h3>
            <h6 className="text-xs font-semibold border-b border-b-slate-300 mb-2 pb-1 capitalize">{car.modelo}</h6>
            <span className="text-xs rounded-sm bg-indigo-200 py-1 px-2 font-normal capitalize">{car.tipo}</span>
          </Link>
          )
        )}

        {RENDER_CAR_LIST.length === 0 && (
          <div className="bg-red-100 rounded-md px-5 py-2 text-red-900">
            <p className="text-center text-sm">No se encontraron autos</p>
          </div>
      )}
      </div>
    </>

  );
}
 
export default CarList;