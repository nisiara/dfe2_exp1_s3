import { NavLink } from "react-router-dom";
import data from "../../../public/data/data";
import "./Header.sass"
const Header = () => {
  
  const carsByType = Object.groupBy(data, auto => auto.tipo);
  console.log('carsByType', carsByType)
  const carTypes = Object.keys(carsByType);
  console.log('carTypes', carTypes)

  return (
    <header className="header">
      <h1 className="text-3xl font-bold">Automotora</h1>
      <nav className="header__nav"> 
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'header__link header__link--active' : 'header__link')}>Home</NavLink></li>
            {carTypes.map(type => (
              <li key={type}>
                <NavLink to={`/type/${type.toLowerCase()}`} className={({ isActive }) => (isActive ? 'header__link header__link--active' : 'header__link')}>{type}</NavLink>
              </li>
            ))}
          <li>
            <NavLink to="/about-us" className={({ isActive }) => (isActive ? 'header__link header__link--active' : 'header__link')}>About us</NavLink>
          </li>
        </ul>
      </nav>
     </header>
  )
}
 
export default Header;