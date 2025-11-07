import { useState } from "react";
import { PageTitle} from "../components/common/Common";
import { Input, Select, Radio, Button } from "../components/form/Form";
import { Link } from "react-router-dom";

const AddCarPage = ({dispatch}) => {

  const carTypes = ['city car', 'hatchback', 'sedan', 'suv', 'deportivo', 'crossover', 'familiar']
  const carBrands = ['nissan', 'porshe', 'ford', 'toyota', 'tesla', 'honda', 'hyundai', 'volkswagen', 'mercedes benz', 'bmw', 'chevrolet', 'audi', 'mitsubishi', 'mazda', 'land rover', 'alfa romeo', 'volvo', 'kia']
  const combustible = ['gasolina', 'diesel', 'eléctrico', 'híbrido']
  const transmision = ['automática', 'manual', 'cvt']

  const date = new Date();
  const timestamp = date.getTime();
  
  const INITIAL_FORM_STATE = {
    id: timestamp,
    modelo: '',
    marca: '',
    tipoCombustible: '',
    transmision: '',
    tipo: ''
  }

  const [formInputs, setFormInputs] = useState(INITIAL_FORM_STATE)
  const [fullfilledForm, setFullfilledForm] = useState(false)
  const [addedCar, setAddedCar] = useState(false)

  function handleOnChange(event){
    const {name, value} = event.target
    const updatedInputs = { ...formInputs, [name]: value }
    setFormInputs(updatedInputs)

    const isFormValid = Object.values(updatedInputs).every(input => input !== '' && input !== undefined)
    setFullfilledForm(isFormValid)
  }

  function handleOnSubmit(event){
    event.preventDefault()
    dispatch({type: 'ADD_CAR', payload: formInputs})
    setFullfilledForm(false)
    handleAddedCar()
  }

  function handleAddedCar(){
    const updatedAddedCar = !addedCar
    setAddedCar(updatedAddedCar)
  }
  
  return (
    <section>
      <PageTitle title='Agregar Vehículo'/>
      {!addedCar ? (
        <form onSubmit={handleOnSubmit} className="w-full md:w-96">
        <Input label='Modelo' type='text' name='modelo' onChange={handleOnChange}/>
        <Select label='Marca' name='marca' onChange={handleOnChange} options={carBrands}/>
        <Select label='Tipo' name='tipo' onChange={handleOnChange} options={carTypes}/>
        <Radio label='Combustible' input={combustible} name="tipoCombustible" onChange={handleOnChange} />
        <Radio label='Transmisíon' input={transmision} name="transmision" onChange={handleOnChange} />
        <Button state={!fullfilledForm} text='Agregar automovil'/>
      </form>
      ) : (
        <div className="bg-green-200 rounded-md px-5 py-2 text-green-900 md:w-3/5">
          <p className="text-center text-sm">
            El auto marca <span className="capitalize font-bold">{formInputs.marca}</span> modelo <span className="capitalize font-bold">{formInputs.modelo}</span> se ha agregado con exito
            {/* {`El auto marca: ${formInputs.marca} modelo: ${formInputs.modelo} se ha agregado con exito`}  */}
          </p>
          <Link to={`/type/${formInputs.tipo.toLowerCase()}`} className="text-sm font-bold text-center block">Revisalo aquí</Link>
        </div>
      )}
      
    </section>
  );
}

export default AddCarPage;