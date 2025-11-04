const Filter = ({carList}) => {

  /* const GET_OBJ_KEYS = carList.reduce((acumulador, objetoActual) => {
    const clavesActuales = Object.keys(objetoActual)
    clavesActuales.forEach(clave => {
      acumulador.add(clave);
    });
    return acumulador;
  }, new Set())

  const OBJ_KEYS = Array.from(GET_OBJ_KEYS);
  console.log(OBJ_KEYS)

  const GET_OBJ_VALUES = carList.reduce((acumulador, objetoActual) => {
    Object.keys(objetoActual).forEach(clave => {
      const valor = objetoActual[clave];
    
      if (!acumulador[clave]) {
        acumulador[clave] = { [clave]: [valor] };
      } else {
        acumulador[clave][clave].push(valor);
      }
    });
  
    return acumulador;
  }, {});

  const GET_VALUES = Object.values(GET_OBJ_VALUES);
  console.log(GET_VALUES) */

  const PROPIEDADES_UNICAS_MAP = carList.reduce((acumulador, objetoActual) => {
    
    // Iteramos sobre las propiedades del objeto actual
    Object.keys(objetoActual).forEach(clave => {
      const valor = objetoActual[clave];
      
      // 1. Asegurarse de que la clave exista en el acumulador como un Set
      if (!acumulador[clave]) {
        // Inicializa un Set para garantizar valores únicos
        acumulador[clave] = new Set(); 
      }
      
      // 2. Añadir el valor al Set (Set maneja la unicidad automáticamente)
      if (valor !== undefined && valor !== null) {
            acumulador[clave].add(valor);
      }
    });

    return acumulador;
  }, {}); // Inicia con un objeto vacío

  // Transformación final: Convierte el Map de Sets a un Map de Arrays
  const DATALIST_DATA = {};
  for (const [key, set] of Object.entries(PROPIEDADES_UNICAS_MAP)) {
    DATALIST_DATA[key] = Array.from(set);
  }

  // OBJ_KEYS ahora es simplemente las claves del nuevo objeto
  const OBJ_KEYS = Object.keys(DATALIST_DATA);

  return (


    <aside>
      
      {OBJ_KEYS.map((itemKey, index) => (
          <div key={index}>
              <label htmlFor={itemKey} className="block text-sm">{itemKey}</label>
              <input list={itemKey} name={itemKey} />

              <datalist id={itemKey}>
                  {/* Itera directamente sobre el array de valores únicos para esa clave */}
                  {DATALIST_DATA[itemKey].map((value, i) => (
                      <option key={i} value={value} />
                  ))}
              </datalist>
          </div>
      ))}
      
    </aside>
 
)}
  

 
export default Filter;