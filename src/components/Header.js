import '../styles/Header.css';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header-container">
      <Link to="/" className="logo-link">
          <img src={logo} alt="logo" className="logo" />
        </Link>
        <div className='total-links'>
      <div className="nav-links">
        <Link to="/indicacao" className="nav-link button">
          INDICAÇÃO
        </Link>
        <Link to="/cliente" className="nav-link button">
          ÁREA DO CLIENTE
        </Link>
        <p className="nav-link suport">Suporte +55 (87) 3835-8310</p>
      </div>
      <div className="logo-links">
        <div className="nav-links2">
          <Link to="/suaCasa" className="nav-link2">
            PARA SUA CASA
          </Link>
          <Link to="/suaEmpresa" className="nav-link2">
            PARA SUA EMPRESA
          </Link>
          <Link to="/suporte" className="nav-link2">
            SUPORTE
          </Link>
          <Link to="/conheca" className="nav-link2">
            CONHEÇA-NOS
          </Link>
          <Link to="/faleConosco" className="nav-link2">
            FALE CONOSCO
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;