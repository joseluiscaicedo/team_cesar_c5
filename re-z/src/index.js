//DEPENDENCIAS
import React from 'react';
import ReactDOM from 'react-dom';

//COMPONENTES
import './global.css';
import RecipeCardSquare from './components/RecipeCardSquare'
//import Button from './components/Button' */
//import SwitchPerfil from "./components/SwitchPerfil"
//import RecipeCardHorizontalSimple from './components/RecipeCardHorizontalSimple'
//import FooterA from './components/FooterA' */
import RecipeCardHorizontalDerecha from './components/RecipeCardHorizontalDerecha'
import RecipeCardHorizontalIzquierda from './components/RecipeCardHorizontalIzquierda'
import CardVerticalScroll from './components/CardVerticalScroll'
import Landing from './components/page/Landing'
//import Switch from './components/SwitchPerfil';*/
//import Search from './components/Search'

//Para cuando queramos renderiar todo el sitio con App
// import App from './App';

// ---las librerías de abajo venían con create-react-app, aun no las sé usar entonces las comenté---
// import * as serviceWorker from './serviceWorker';
import RecipeCardCarruselHome from './components/RecipeCardCarruselHome'


const container = document.getElementById('app');


// ReactDOM.render( qué, dónde)
// ReactDOM.render( <elemento/>, dónde)


ReactDOM.render(<Landing />,container)

//Para cuando queramos renderizar todo el sitio con App.js
// ReactDOM.render(<App />,container)
