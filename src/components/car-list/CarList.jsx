const CarList = ({carList, carType}) => {
  const filteredCars = carType 
    ? carList.filter(car => car.tipo.toLowerCase() === carType.toLowerCase())
    : carList;

  return ( 
    <div className="grid grid-cols-5 gap-6">
      {filteredCars.length > 0 ? (
        filteredCars.map(car => (
          <article key={car.id} className="odd:bg-indigo-50 rounded-md p-2">
            <h3 className="text-lg font-bold mb-5">{car.marca}</h3>
            <h6 className="text-xs font-semibold border-b border-b-slate-300 mb-2 pb-1">{car.modelo}</h6>
            <span className="text-xs rounded-sm bg-indigo-200 py-1 px-2 font-normal">{car.tipo}</span>
          </article>
        ))
      ) : (
        <p>No se encontraron autos de tipo "{carType}"</p>
      )}
    </div>

  );
}
 
export default CarList;