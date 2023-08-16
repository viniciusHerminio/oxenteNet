import '../styles/Footer.css';

function Footer() {
  return (
    <div className="container">
      <div className="pricing">
        <div className="plan">
          <h2 className="title">200 MEGA FIBRA</h2>
          <p className="subtitle">Contrate 100M, receba 200M</p>
          <div className="price-container">
            <span className="currency">R$</span>
            <h1 className="main-price">89,</h1>
            <span className="cents">90</span>
          </div>
          <p className="price-info">por mês</p>
          <div className="divider"></div>
          <p className="features">Wi-fi Turbo | Oxente.Tv| Valor já com desconto por fidelização e pagamento até o vencimento.</p>
        </div>
        <div className="plan">
          <h2 className="title">400 MEGA FIBRA</h2>
          <p className="subtitle">Contrate 200M, receba 400M</p>
          <div className="price-container">
            <span className="currency">R$</span>
            <h1 className="main-price">79,</h1>
            <span className="cents">90</span>
          </div>
          <p className="price-info">por mês</p>
          <div className="divider"></div>
          <p className="features">Wi-fi Turbo | Deezer Premium | Oxente.Tv| Valor já com desconto por fidelização e pagamento até o vencimento.</p>
        </div>
        <div className="plan">
          <h2 className="title">500 MEGA FIBRA</h2>
          <p className="subtitle">Contrate 200M, receba 500M</p>
          <div className="price-container">
            <span className="currency">R$</span>
            <h1 className="main-price">99,</h1>
            <span className="cents">90</span>
          </div>
          <p className="price-info">por mês</p>
          <div className="divider"></div>
          <p className="features">Wi-fi Turbo | Deezer Premium | Clinica digital MediQuo | Streaming vídeo Looke |
          <br />
          Oxente.Tv| Valor já com desconto por fidelização e pagamento até o vencimento</p>
        </div>
        <div className="plan">
          <h2 className="title">600 MEGA FIBRA</h2>
          <p className="subtitle">Contrate 300M, receba 600M</p>
          <div className="price-container">
            <span className="currency">R$</span>
            <h1 className="main-price">129,</h1>
            <span className="cents">90</span>
          </div>
          <p className="price-info">por mês</p>
          <div className="divider"></div>
          <p className="features">Super Wi-fi Mesh | Deezer Premium | Clinica digital MediQuo | Streaming vídeo 
          <br />
          Looke | Oxente.Tv| Valor já com desconto por fidelização e pagamento até o vencimento</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;