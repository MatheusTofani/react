import { useState } from 'react'
import styles from './App.module.css';

function App() {

  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState(null);



  const calcularIMC = (e) => {
    e.preventDefault();

    if (peso && altura) {
      const imc = (peso / ((altura / 100) * (altura / 100))).toFixed(2);
      setResultado(imc);
    } else {
      alert('Por favor, insira o peso e a altura corretamente');
    }
  };

  return (

    
    <div className={styles.container}>
      <div className={styles.box}>
        <h1>Calcular IMC</h1>
        <form onSubmit={calcularIMC}>
          <input
            type="number"
            placeholder="Digite sua altura (CM)"
            className={styles.input}
            value={altura}
            onChange={(e) => setAltura(e.target.value)} 
          />
          <br />
          <input
            type="number"
            placeholder="Digite seu peso (KG)"
            className={styles.input}
            value={peso}
            onChange={(e) => setPeso(e.target.value)} 
          />
          <br />
          <button type="submit" className={styles.button}>
            Calcular
          </button>

          
        </form>
        {resultado && <p>{resultado} kg/m2</p>}
      </div>
    </div>
  );
}

export default App
