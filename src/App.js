import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';

class Addon extends Component
{
  constructor(props)
  {
    super(props);
  }
  render()
  {

    return(
      <div>

                      <h1>I am an addon</h1>
      </div>

    );
  }
}

class App extends Component {
  addPatty()
  {
    alert();
    ReactDOM.render(<Addon />,document.getElementById('addON'));
  }
  render() {

    return (
      <div className="App">
        <div className='header'>
            <div className='logo col-md-3'>LOGO WILL COME HERE</div>
            <div className='title col-md-7'><h1>Mata Vaishno Burger point</h1></div>
        </div>
        <div className='Burger-Preview'>
               <img src='/images/top-bun.png' height='150' width='300'/><br />
               <div id='addON'>


               </div>
               <img src='/images/bottom-bun.jpg' />

        </div>
        <div className='adder jumbotron'>
          <div className='item'>
            Patty : <input type='text' /> &nbsp;
          <button type="button" className="btn btn-primary" onClick={this.addPatty}>ADD TO BURGER</button>
          </div>
          <br />
          <div className='item'>
            Onion : <input type='text' /> &nbsp;
          <button type="button" className="btn btn-primary">ADD TO BURGER</button>
          </div>
          <br />
          <div className='item'>
            Tomato  : <input type='text' /> &nbsp;
          <button type="button" className="btn btn-primary">ADD TO BURGER`</button>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
