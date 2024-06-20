import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './App.styles.scss';

function App() {
  return (
    <div className='app'>
      <div className='app-content'>
        <Header className='app__header' />
        <Footer />
      </div>
    </div>
  );
}

export default App;
