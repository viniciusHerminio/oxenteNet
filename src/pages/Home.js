import Footer from '../components/Footer';
import Header from '../components/Header';
import Banner from '../images/banner.png';
import '../styles/Home.css';

function Home() {
  return (
    <div className="App">
     <Header />
     <div className='bannerAling'>
        <img src={ Banner } alt='banner' className='banner' />
     </div>
     <div className='infos'>
       <Footer />
     </div>
    </div>
  );
}

export default Home;