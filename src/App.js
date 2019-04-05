import React, { Component, Fragment } from 'react';
import Header from './Header'
import OptionCard from './OptionCard'
import './app.css'



class App extends Component {
  render() {
    return (
        <Fragment>
          <Header title="Guerra de lenguajes" background={'k'}/>
          <section class="card-container">
            <OptionCard option="piedra" />
            <OptionCard option="papel" />
            <OptionCard option="tijeras" />
          </section>
        </Fragment>
        
    );
  }
}

export default App;