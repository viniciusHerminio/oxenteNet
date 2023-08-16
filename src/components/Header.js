import '../styles/Header.css';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';

function Header () {

  return (
    <div>
    <div className='geral'>
        <Link className='infos button' to={'/indicacao'}>INDICAÇÃO</Link>
        <Link to={'/cliente'} className='infos button'>ÁREA DO CLIENTE</Link>
        <p className='infos suport'>Suporte +55 (87) 3835-8310</p>
    </div>
    <div className='geral2'>
        <Link to={'/'} ><img src={ logo } alt='logo' className='logo' />
        </Link>
        <div className='infos2'>
        <Link  className='links' to={'/suaCasa'}>
          <h4>PARA SUA CASA</h4>
        </Link>
        <Link className='links' to={'/suaEmpresa'}>
          <h4 >PARA SUA EMPRESA</h4>
        </Link>
        <Link className='links' to={'/suporte'}>
          <h4>SUPORTE</h4>
        </Link>
        <Link to={'/conheca'}>
          <h4 className='links'>CONHEÇA-NOS</h4>
        </Link>
        <Link className='links' to={'/faleConosco'}>
          <h4>FALE CONOSCO</h4>
        </Link>
        </div>
        </div>
    </div>
  );
}

export default Header;