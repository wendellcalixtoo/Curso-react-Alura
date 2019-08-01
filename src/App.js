import React, { Component } from 'react';

import Tabela from './Components/Tabela';
import Formulario from './Components/Formulario';

class App extends Component {
  state = {
    autores: [
      {
        nome: 'Paulo',
        livro: 'React',
        preco: '1000',
      },
      {
        nome: 'Daniel',
        livro: 'Java',
        preco: '99',
      },
      {
        nome: 'Marcos',
        livro: 'Design',
        preco: '150',
      },
      {
        nome: 'Bruno',
        livro: 'DevOps',
        preco: '100',
      },
      {
        nome: 'Wendell',
        livro: 'React',
        preco: '1000',
      },
      {
        nome: 'Jessicaa',
        livro: 'Python',
        preco: '1000',
      },
    ],
  };

  removeAutor = index => {
    const { autores } = this.state;

    this.setState({
      autores: autores.filter((autor, posAtual) => {
        return posAtual !== index;
      }),
    });
  };

  escutadorDeSubmit = autor => {
    this.setState({ autores: [...this.state.autores, autor] });
  };

  render() {
    return (
      <>
        <Tabela autores={this.state.autores} removeAutor={this.removeAutor} />
        <Formulario escutadorDeSubmit={this.escutadorDeSubmit} />
      </>
    );
  }
}

export default App;
