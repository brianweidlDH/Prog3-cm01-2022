import React from 'react'
import './App.css';
import Header from './components/header/Header'
import Footer from './components/footer/Footer';
import Container from './components/Container/Container';


function App() {
  return (
    <>
       <Header titulo="Tienda virtual" subtitulo="El bazar de pepe"/>        
        <Container />
      <Footer /> 
    </>
    );  
}

export default App;
