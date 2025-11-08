import { Link } from "react-router-dom";
const Footer = () => {
  const DATE = new Date();
  const FULL_YEAR = DATE.getFullYear()
  return ( 
    <footer className="mt-10 pt-6 border-t-2 border-t-slate-600">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-10 mb-10">
        <aside className="col-span-1 sm:col-span-6 lg:col-span-9">
          <h2 className="font-medium text-lg">Automotora</h2>
          <small className="block leading-1 md:w-3/6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus distinctio molestiae porro illo quam. Ex aut debitis officiis perferendis iusto deleniti illum dignissimos illo voluptates, perspiciatis nobis facilis quibusdam consectetur?</small>
        </aside>
        <nav className="col-span-1 sm:col-span-6 lg:col-span-3">
          <ul>
            <li><Link className="underline text-xs uppercase text-right block" to="/">Inicio</Link></li>
            <li><Link className="underline text-xs uppercase text-right block mt-1" to="/car-list" end>Lista de Vehículos</Link></li>
            <li><Link className="underline text-xs uppercase text-right block mt-1" to="/purchase-option">Opciones de Compra</Link></li>
            <li><Link className="underline text-xs uppercase text-right block mt-1" to="/add-car">Agregar Vehículo</Link></li>
            <li><Link className="underline text-xs uppercase text-right block mt-1" to="/about-us">Nosotros</Link></li>
          </ul>
        </nav>
      </div>
      
      <p className="text-center text-xs border-t border-t-slate-600 pt-4 pb-8">{FULL_YEAR}</p>
    </footer>
   );
}
 
export default Footer;