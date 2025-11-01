const Input = ({label, name, type, onChange }) => {
  return (
    <div className="mt-4 w-full md:w-96">
      <label className="uppercase block text-xs font-medium">{label}</label>
      <input className="size-full rounded-md border border-slate-900 px-3 py-2 text-xs h-10 capitalize" name={name} type={type} onChange={onChange}/>
    </div>
  );
}

const Select = ({label, name, options, onChange}) => {
  return (
    <div className="mt-4 w-full md:w-96">
      <label className="uppercase block text-xs font-medium">{label}</label>
      <select className="size-full rounded-md border border-slate-900 px-3 py-2 text-xs h-10 capitalize" name={name} onChange={onChange}>
        <option></option>
        {options?.map((option, index) => <option key={index}>{option}</option>)}
    </select>
    </div>
  );
}

const Radio = ({label, input, onChange, name}) => {
  return (
    <div className="mt-6 w-full md:w-96">
      <label className="uppercase block text-xs font-medium mb-1">{label}</label>
      <div className="flex align-middle gap-6">
        {input.map((item, index) => {
          return(
            <div key={index} className="flex items-center gap-x-1">
              <input className="appearance-none checked:bg-slate-900 h-5 w-5 rounded-full border border-slate-900 p-2" type="radio" name={name} onChange={onChange} value={item} />
              <label className="capitalize text-xs font-medium">{item}</label>
            </div>
          )})
        }
      </div>      
    </div>
  );
}

const Button = ({state, text}) => {
  return ( 
    <button disabled={state} className="disabled:opacity-35 w-full md:w-96 mt-10 p-4 text-xs border rounded-md bg-slate-900 text-white uppercase font-medium">{text}</button>
  );
}

export{Input, Select, Radio, Button}
