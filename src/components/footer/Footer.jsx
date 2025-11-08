import { Link } from "react-router-dom";
const Footer = () => {
  const DATE = new Date();
  const FULL_YEAR = DATE.getFullYear()
  return ( 
    <footer className="mt-10 pt-6 border-t-2 border-t-slate-600">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-10 mb-10">
        <aside className="col-span-1 sm:col-span-6 lg:col-span-9">
          <h2 className="font-medium text-lg">Vanguardia Motor <small className="block uppercase text-xs mb-2">automotora</small></h2>
          <small className="block leading-1 md:w-3/6 font-light">Nacidos de una profunda pasión por la ingeniería y el diseño automotriz, nuestra misión siempre ha sido clara: ofrecer vehículos de la más alta calidad y un servicio que inspire total confianza.</small>
        </aside>
        <nav className="col-span-1 sm:col-span-6 lg:col-span-3">
          <ul className="flex flex-col sm:justify-between md:block gap-2 sm:gap-1">
            <li><Link className="underline text-xs capitalize text-left sm:text-right block mt-1" to="/">Inicio</Link></li>
            <li><Link className="underline text-xs capitalize text-left sm:text-right block mt-1" to="/car-list" end>Lista de Vehículos</Link></li>
            <li><Link className="underline text-xs capitalize text-left sm:text-right block mt-1" to="/purchase-option">Opciones de Compra</Link></li>
            <li><Link className="underline text-xs capitalize text-left sm:text-right block mt-1" to="/add-car">Agregar Vehículo</Link></li>
            <li><Link className="underline text-xs capitalize text-left sm:text-right block mt-1" to="/about-us">Nosotros</Link></li>
          </ul>
        </nav>
      </div>
      
      <p className="text-center text-xs border-t border-t-slate-600 pt-4 pb-8">{FULL_YEAR}</p>
    </footer>
   );
}
 
export default Footer;