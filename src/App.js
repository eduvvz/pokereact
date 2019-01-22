import React, { Component } from 'react';
import Header from './components/Header';
import './assets/App.scss';
import { server } from './commons';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {pokemonInput: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({pokemonInput: event.target.value});
    
    if(event.target.value.length > 0){
      this.getPokemon(event.target.value);
    }
  }

  getPokemon = async name => {
    fetch(`${server}/pokemon/${name}`)
      .then(
        await (response => {
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
              response.status);
            this.setState({pokemon: null})
            return;
          }

          response.json().then(data => {
            console.log(data)
            this.setState({pokemon: data})
          });
        })
      )
      .catch(err => {
        console.log('Fetch Error :-S', err);
      })
  }

  render() {

    return (
      <div>
        <Header/>

        <div className="container is-widescreen">
          <div className="columns is-gapless">
            <div className="column">
              <div className="field">
              <div className="control">
                <input 
                  className="input is-large is-danger" 
                  type="text" 
                  placeholder="Digite o nome do pokemon" 
                  value={this.state.pokemonInput} onChange={this.handleChange}
                />
              </div>
            </div>
            </div>
          </div>
          
          <div className="columns is-centered">
            <div className="column is-half">
              
            </div>
          </div>
          
        </div>
      </div>
    );
  }
}

export default App;
