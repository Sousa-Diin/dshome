import React from 'react';
import axios from 'axios';
import './App.css';  // Importe o arquivo CSS

const App = () => {
  const espIp =  'http://192.168.1.8'; // Substitua pelo IP do seu ESP

  const ligarLampada = async () => {
    try {
      await axios.get(`${espIp}/ligar`);
      alert("Lâmpada ligada!");
    } catch (error) {
      console.error("Erro ao ligar a lâmpada:", error);
    }
  };

  const desligarLampada = async () => {
    try {
      await axios.get(`${espIp}/desligar`);
      alert("Lâmpada desligada!");
    } catch (error) {
      console.error("Erro ao desligar a lâmpada:", error);
    }
  };

  return (
    <div>
      <h1>Dashboard DSHome</h1>
      <button onClick={ligarLampada} style={{ marginRight: '10px' }}>
        Ligar Lâmpada
      </button>
      <button onClick={desligarLampada}>
        Desligar Lâmpada
      </button>
    </div>
  );
};

export default App;
