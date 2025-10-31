import { NavLink } from "react-router-dom";

const navStyles = {
  base: 'text-sm px-2 py-1 block font-medium',
  active: 'border-b-2 border-b-slate-600'
}

const Header = () => {
  return (
    <header className="header mb-10 flex align-middle py-6">
      <h1 className="text-3xl font-bold">Automotora</h1>
      <nav className="ml-auto"> 
        <ul className="flex align-middle gap-3">
          <li>
            <NavLink to="/" className={({isActive}) => `${navStyles.base} ${isActive ? navStyles.active : ''}`}>Inicio</NavLink>
          </li>
          <li>
            <NavLink to="/car-list" className={({isActive}) => `${navStyles.base} ${isActive ? navStyles.active : ''}`}>Listado de Autos</NavLink>
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