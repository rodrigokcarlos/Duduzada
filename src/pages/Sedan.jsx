import React, { Component, useEffect, useState } from 'react'
import axios from 'axios';
import Header from './components/Header';
import Footer from './components/Footer';
import './Corpo.css';
import './Comprar.css';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SpeedIcon from '@mui/icons-material/Speed';

export default function Sedan() {

  const [listaCarros, setCarros] = useState([]);


  const getCarros = async () => {
  try {
    const resposta = await axios.get(
      "https://concessionaria.onrender.com/Sedan"
      );
    const data = resposta.data;

    setCarros(data);
  } catch (error) {
    console.log(error)
  }};
  useEffect(() =>{
    getCarros();
  }, []);

    return (
      <div className='divisao'>
        <Header/>
        <div className="corpo">
          <div className='corpoGrid'>
            <div className="comprarTitulo">Seminovos Sedan</div>
            <div className="comprarCarros">
              {listaCarros.length === 0 ? (<div className="c-loader"></div>) : (
                listaCarros.map((carros) => (
                  <div className="cardCarros" key={carros.id}>
                  <img className='imgCarro' src={carros.img} alt=""/>
                  <span className="cimaNomeCarro">{carros.modelo}</span>
                  <span className="cimaMarcaCarro">{carros.marca}</span>
                  <span className="meioPreco">R$ {carros.preço}</span>
                  <span className="meioKm"><SpeedIcon/>&nbsp; {carros.km} Km</span>
                  <span className="meioAno"><CalendarMonthIcon/>&nbsp; {carros.ano}</span>
                  <button className="baixoBotao">Comprar</button>
                </div>
                ))
              )}
            </div>
          </div></div>
        <Footer/>
      </div>
    )
}