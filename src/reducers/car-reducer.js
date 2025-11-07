export default function carReducer(appState ,action){
    console.log("estado", appState)
    switch(action.type){
      case 'ADD_CAR': {
        const NEW_CAR = action.payload
        return {
          ...appState,
          listaCompletaAutos: [...appState.listaCompletaAutos, NEW_CAR]
        }
      }

      case 'ADD_TO_PURCHASE_OPTION': {
        const ID_CAR = action.payload
        const SELECTED_CAR = appState.listaCompletaAutos.find( car => String(car.id) === ID_CAR )
        const UPDATED_GLOBAL_LIST = appState.listaCompletaAutos.filter( car => String(car.id) !== ID_CAR)
        const UPDATED_FILTERED_LIST = appState.listaAutosFiltrados.filter( car => String(car.id) !== ID_CAR)
        return {
          ...appState,
          listaCompletaAutos: UPDATED_GLOBAL_LIST,
          listaAutosFiltrados: UPDATED_FILTERED_LIST,
          listaAutosOpcionCompra: [...appState.listaAutosOpcionCompra, SELECTED_CAR]
        }
      }

      case 'REMOVE_FROM_PURCHASE_OPTION':{
        const SELECTED_CAR = action.payload
        const UPDATED_LIST = appState.listaAutosOpcionCompra.filter( car => car.id !== SELECTED_CAR.id)
        return {
          ...appState,
          listaCompletaAutos: [...appState.listaCompletaAutos, SELECTED_CAR],
          listaAutosFiltrados: [...appState.listaAutosFiltrados, SELECTED_CAR],
          listaAutosOpcionCompra: UPDATED_LIST
        }
      }

      case 'APPLY_FILTER':{
        const {type, value} = action.payload
        const updateFilterValues = {...appState.filterValues, [type]: value }
        const filteredCarList = appState.listaCompletaAutos.filter( car => {
          const {marca, tipo} = updateFilterValues

          if (marca && String(marca).toLowerCase() !== 'todos' && car.marca !== marca) return false
          if (tipo && String(tipo).toLowerCase() !== 'todos' && car.tipo !== tipo) return false
          
          return true
        })
        return {
          ...appState,
          filterValues: updateFilterValues,
          listaAutosFiltrados: filteredCarList
        }
      }
     
      default: 
        return appState
    }
  }