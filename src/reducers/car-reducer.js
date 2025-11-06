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
        const UPDATED_LIST = appState.listaCompletaAutos.filter( car => String(car.id) !== ID_CAR)
        console.log('selected car', SELECTED_CAR)
        return {
          ...appState,
          listaCompletaAutos: UPDATED_LIST,
          listaAutosOpcionCompra: [...appState.listaAutosOpcionCompra, SELECTED_CAR]

        }
      }
      case 'REMOVE_FROM_PURCHASE_OPTION':{
        const SELECTED_CAR = action.payload
        console.log(SELECTED_CAR.id)
        const UPDATED_LIST = appState.listaAutosOpcionCompra.filter( car => car.id !== SELECTED_CAR.id)
        return {
          ...appState,
          listaCompletaAutos: [...appState.listaCompletaAutos, SELECTED_CAR],
          listaAutosOpcionCompra: UPDATED_LIST
        }
      }
      default: 
        return appState
    }
  }