import { NavLink } from "react-router-dom";

const navStyles = {
  base: 'text-sm px-2 py-1 block font-medium',
  active: 'border-b-2 border-b-slate-600'
}

const Header = () => {
  return (
    <header className="header mb-2 md:mb-10 md:flex align-middle py-6">
      <h1 className="mb-3 md:mb-0 text-center md:text-left text-3xl font-bold">Automotora</h1>
      <nav className="md:ml-auto"> 
        <ul className="flex justify-between md:justify-normal align-middle gap-3">
          <li>
            <NavLink to="/" className={({isActive}) => `${navStyles.base} ${isActive ? navStyles.active : ''}`}>Inicio</NavLink>
          </li>
          <li>
            <NavLink to="/car-list" className={({isActive}) => `${navStyles.base} ${isActive ? navStyles.active : ''}`}>Listado de Autos</NavLink>
          </li>
          <li>
            <NavLink to="/purchase-option" className={({isActive}) => `${navStyles.base} ${isActive ? navStyles.active : ''}`}>Opciones compra</NavLink>
          </li>
          <li>
            <NavLink to="/add-car" className={({isActive}) => `${navStyles.base} ${isActive ? navStyles.active : ''}`}>Agregar Auto</NavLink>
          </li>
          <li>
            <NavLink to="/about-us" className={({isActive}) => `${navStyles.base} ${isActive ? navStyles.active : ''}`}>Nosotros</NavLink>
          </li>
        </ul>
      </nav>
     </header>
  )
}
 
export default Header;