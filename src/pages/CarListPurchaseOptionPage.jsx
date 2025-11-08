import {PageTitle} from "../components/common/Common"

const CarListPurchaseOptionPage = ({carList, dispatch}) => {

  function handleRemoveFromList(car){
    dispatch({type: 'REMOVE_FROM_PURCHASE_OPTION', payload: car})
  }

  return (
    <section>
      <PageTitle title='Lista Opción Compra'/>
      <div className={ carList.listaAutosOpcionCompra.length > 0 ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6' : 'grid sm:gap-6'}>
          {carList.listaAutosOpcionCompra.length > 0 ? (
            carList.listaAutosOpcionCompra.map(car => (
              <article key={car.id} className="odd:bg-indigo-50 rounded-md p-2">
                <h3 className="text-lg font-bold mb-5 capitalize">{car.marca}</h3>
                <h6 className="text-xs font-semibold border-b border-b-slate-300 mb-2 pb-1 capitalize">{car.modelo}</h6>
                <span className="text-xs rounded-sm bg-indigo-200 py-1 px-2 font-normal capitalize">{car.tipo}</span>
                <button onClick={() => handleRemoveFromList(car)} className="text-xs mt-2 block underline">Eliminar de la lista</button>
              </article>
            ))
          ) : (
            <div className="bg-yellow-100 rounded-md px-5 py-2 text-yellow-900">
              <p className="text-center text-sm">Todavía no agregas vehículos a la lista.</p>
            </div>
          )}
      </div>
    </section>
  );
}
 
export default CarListPurchaseOptionPage;