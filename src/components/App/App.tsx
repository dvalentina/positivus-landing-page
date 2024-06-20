import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import AboutUs from '../AboutUs/AboutUs';
import './App.styles.scss';

function App() {
  return (
    <div className='app'>
      <div className='app-content'>
        <Header className='app__header' />
        <AboutUs className='app__about-us' />
        <Footer />
      </div>
    </div>
  );
}

export default App;
