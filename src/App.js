import React, { Component } from 'react';
import './App.css';
import Title from './components/Title';

class App extends Component {
   constructor(props){
      super(props);
      this.state = {
        numero :0 
      };
      this.updateNumero = this.updateNumero.bind(this);

   }

   updateNumero(){
    this.setState({
      numero: this.state.numero + 1
    });
   }

  render() {
    return (
      <section>
        <div>
          <div>
            <Title></Title>
              <h2>{ this.state.numero }</h2>

            <button onClick={ () => { this.updateNumero() }} > Crear cuenta Gratuita </button>
            <div>
              <ul>
                <li>
                  <h3>Calificaciones con emociones </h3>
                  <p>Calificar tus lugares con experiencias no con numeros</p>
                </li>
                <li>
                  <h3>¿Sin internet ? Sin problemas</h3>
                  <p>Place funciona sin internet on conexion lenta </p>
                </li>
                <li>
                <h3>favoritos</h3>
                  <p> Lista de sitios favoritos  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default App;
