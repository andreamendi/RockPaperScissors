import React, { Component, Fragment } from 'react';
import Header from './Header'
import OptionCard from './OptionCard'
import './app.css'

class App extends Component {

  constructor(props, context) {
    super(props);

    this.mode = 'single';
    this.options = ['piedra', 'papel', 'tijeras', 'lagarto', 'Spock'];
    this.getPlayerValue = this.getPlayerValue.bind(this);
    this.getGameMode = this.getGameMode.bind(this);

    this.state = {
      mode: 'single'
    }
  }

  getGameMode(newMode) {
    alert(newMode);
    this.setState({
      mode: newMode
    })
  }

  getComputerValue() {
    const random = Math.floor(Math.random() * 3);
    return this.options[random];
  }

  getPlayerValue(value) {
    let playerValue = value;
    let secondPlayerValue;
    if(this.mode == 'single') {
      secondPlayerValue = this.getComputerValue();
    } else {
      secondPlayerValue = 'papel';
    }
    this.getWinner(playerValue, secondPlayerValue);
  }

  getWinner(player1, player2) {
    if(player1 === player2) {
      alert('empate');
    } else if(player1 == 'papel' && player2 == 'piedra') {
      alert('player win');
    } else if(player1 == 'papel' && player2 == 'tijeras') {
      alert('Computer win');
    }
  }

  render() {
    let cards = this.options.map((option)=> {
      return <OptionCard click={this.getPlayerValue} option={option} />
    })
    return (
        <Fragment>
          <Header click={this.getGameMode} title="Guerra de lenguajes" background={'k'}/>
          <section className="card-container">
            {cards}
          </section>
        </Fragment>      
    );
  }
}

export default App;