import React from 'react'
import {Route, Switch} from 'react-router-dom'

import './App.css';
import Header from './components/header/Header'
import Footer from './components/footer/Footer';
//import Container from './components/Container/Container';
import Home from './pages/Home/Home';
//import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import NotFound from './pages/NotFound/NotFound';
import Characters from './pages/Characters/Characters';
import CharacterDetails from './pages/CharacterDetails/CharacterDetails';

function App() {
  return (
    <>
       <Header titulo="Rick & Morty" subtitulo="TV Serie"/>        
        {/* <Container /> */}
        <Switch>
          <Route path="/" exact  >
            <Home />
          </Route>
          <Route path="/about" component={Characters} />
          <Route path="/characters/id/:id" component={CharacterDetails} />
          <Route path="/contact" component={Contact}/>
          <Route component={NotFound}/>
        </Switch>
      <Footer /> 
    </>
    );  
}

export default App;
