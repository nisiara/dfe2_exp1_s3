import { useState } from "react";
import { PageTitle} from "../components/common/Common";
import { Input, Select, Radio, Button } from "../components/form/Form";

const AddCarPage = ({dispatch}) => {

  const carTypes = ['city car', 'hatchback', 'sedan', 'suv', 'deportivo', 'crossover', 'familiar']
  const carBrands = ['nissan', 'porshe', 'ford', 'toyota', 'tesla', 'honda', 'hyundai', 'volkswagen', 'mercedes benz', 'bmw', 'chevrolet', 'audi', 'mitsubishi', 'mazda', 'land rover', 'alfa romeo', 'volvo', 'kia']
  const combustible = ['gasolina', 'diesel', 'eléctrico', 'híbrido']
  const transmision = ['automática', 'manual', 'cvt']

  const INITIAL_FORM_STATE = {
    id: new Date().toDateString,
    modelo: '',
    marca: '',
    tipoCombustible: '',
    transmision: '',
    tipo: ''
  }

  const [formInputs, setFormInputs] = useState(INITIAL_FORM_STATE)
  const [fullfilledForm, setFullfilledForm] = useState(false)

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
  }
  
  return (
    <section>
      <PageTitle title='Agregar Auto'/>
      <form onSubmit={handleOnSubmit}>
        <Input label='Modelo' type='text' name='modelo' onChange={handleOnChange}/>
        <Select label='Marca' name='marca' onChange={handleOnChange} options={carBrands}/>
        <Select label='Tipo' name='tipo' onChange={handleOnChange} options={carTypes}/>
        <Radio label='Combustible' input={combustible} name="tipoCombustible" onChange={handleOnChange} />
        <Radio label='Transmisíon' input={transmision} name="transmision" onChange={handleOnChange} />
        <Button state={!fullfilledForm} text='Agregar automovil'/>
      </form>
    </section>
  );
}

 
export default AddCarPage;