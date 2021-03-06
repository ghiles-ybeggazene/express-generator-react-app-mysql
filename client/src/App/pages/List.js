import React, { Component } from 'react';

class List extends Component {

  state = {
    usuarios: [],
    usuario: {
      nome: '',
      sobrenome: '',
      email: ''
    }
  }

  componentDidMount(){
    this.getUsuarios()
  }

  getUsuarios = _ => {
    fetch('http://localhost:4000/users/affichage')
    .then(response => response.json())
    .then(response => this.setState({ usuarios: response.data}))
    .catch(err => console.log(err))
  }

  renderUser = ({ user_id, nome, sobrenome, email}) => <div key={user_id}>{nome} | {sobrenome} | {email}</div>

  addUser = _ => {
    const { usuario } = this.state
    fetch(`http://localhost:4000/users/user/add?nome=${usuario.nome}&sobrenome=${usuario.sobrenome}&email=${usuario.email}`)
    .then(this.getUsuarios)
    .catch( err => console.log(err))
  }

  render() {
    const { usuarios, usuario } = this.state
    return (
      <div className="App">
        {usuarios.map(this.renderUser)}

        <div>
          <input
            value={usuario.nome}
            onChange={e => this.setState({ usuario: {...usuario, nome:e.target.value}})} />
            <input
            value={usuario.sobrenome}
            onChange={e => this.setState({ usuario: {...usuario, sobrenome:e.target.value}})} />
            <input
            value={usuario.email}
            onChange={e => this.setState({ usuario: {...usuario, email:e.target.value}})} />
            <button onClick={this.addUser}>Envoyer</button>
        </div>
      </div>
    );
  }
}

export default List;
