import '../styles/Header.css';
import logo from '../images/logo.png';

function Header () {
  return (
    <div>
    <div className='geral'>
        <button className='infos button'>INDICAÇÃO</button>
        <button className='infos button'>ÁREA DO CLIENTE</button>
        <p className='infos suport'>Suporte +55 (87) 3835-8310</p>
    </div>
    <div className='geral2'>
        <img src={ logo } alt='logo' className='logo' />
        <div className='infos2'>
        <h4 className='links'>PARA SUA CASA</h4>
        <h4 className='links'> PARA SUA EMPRESA</h4>
        <h4 className='links'> SUPORTE</h4>
        <h4 className='links'> CONHEÇA-NOS</h4>
        <h4 className='links'>FALE CONOSCO</h4>
        </div>
        </div>
    </div>
  );
}

export default Header;