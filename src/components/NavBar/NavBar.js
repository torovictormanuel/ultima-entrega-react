
import logo from '../assets/coffee-cup.svg'
import CartWiget from '../Carrito/cartWiget';
import SearchBar1 from './SearchBar1';
import { Link } from 'react-router-dom';




function NavBar() {



  return (
    <nav className="navbar is-fixed-top is-info" role="navigation" aria-label="main navigation" >
      <div className="navbar-brand">
        <Link to='/inicio' className="navbar-item" >
          <img src={logo} alt='logo' width="112" height="28px" />
        </Link>

        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="true" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link to='/' className="navbar-item">
            Inicio
          </Link>

          <Link to='/productos' className="navbar-item">
            Menu
          </Link>

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">
              Mas
            </a>

            <div className="navbar-dropdown">
              <a className="navbar-item">
                Delivery
              </a>
              <a className="navbar-item">
                Vacantes de trabajo
              </a>
              <a className="navbar-item">
                Contacto
              </a>
              <a className="navbar-item">
                Reportar un problema
              </a>
            </div>
          </div>
        </div>
        <div className='navbar-item '>
          
         <SearchBar1 />
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className='navbar-item'>
              <Link to='/carrito'>
              <CartWiget  />
            </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;