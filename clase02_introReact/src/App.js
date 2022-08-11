import './App.css';
import Header from './components/header/Header'
import Footer from './components/footer/Footer';
import Producto from './components/producto/Producto';


function App() {

  return (
    <>
      <Header titulo="Tienda virtual" subtitulo="El bazar de pepe"/>
      <Producto nombre="TV 50 Pulgadas" precio={100000}/>
      <Producto nombre="TV 40 Pulgadas" precio={90000}/>
      <Producto nombre="Tablet 10 Pulgadas" precio={30000}/>

      <Footer />
    </>


  );
}

export default App;
