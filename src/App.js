// App.js
import React, { useState } from 'react';
import './App.css';
import Message from './components/Message/Message';
import Table from './components/Table/Table';

function App() {
  const [rows, setRows] = useState([]);
  const [formData, setFormData] = useState({
    data: '',
    despesa: '',
    valor: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleAddRow = () => {
    if (formData.data && formData.despesa && formData.valor) {
      const newRow = { ...formData };
      setRows([...rows, newRow]);
      setFormData({
        data: '',
        despesa: '',
        valor: ''
      });
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  return (
    <div className="App">
      <Message>Renata</Message>
      <div className="inputs">
        <input
          type="date"
          name="data"
          placeholder="Data"
          value={formData.data}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="despesa"
          placeholder="Despesa"
          value={formData.despesa}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="valor"
          placeholder="Valor"
          value={formData.valor}
          onChange={handleInputChange}
        />
        <button onClick={handleAddRow}>Adicionar</button>
      </div>
      <Table rows={rows} />
    </div>
  );
}

export default App;
