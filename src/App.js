import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';

class Addon extends Component
{
  constructor(props)
  {
    super(props);
    this.state={items:[],cost:0};
  }
  render()
  {
    // var newState={items:[],cost:0};
    // newState.items.push(this.props.item);
    // newState.cost++;
    // console.log(newState);
    // this.setState(newState);
    this.state.items.push(this.props.item);

          return(
      <div>
           {
                     this.state.items.map(
                                              function (t)
                                              {
                                                let img="/images/"+t+'.jpg'+"";console.log(img);
                                                return(<div><img src={img} /><br /></div>);
                                              }
                                          )


           }

      </div>

    );
  }
}
function addItem(name)
{

  ReactDOM.render(<Addon item={name} />,document.getElementById('addON'));
}
class App extends Component {

  addPatty()
  {
    addItem('Patty');
  }
  addOnion()
  {
    addItem('Onion');
  }
  addTomato()
  {
    addItem('Tomato');
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
          <button type="button" className="btn btn-primary" onClick={this.addOnion}>ADD TO BURGER</button>
          </div>
          <br />
          <div className='item'>
            Tomato  : <input type='text' /> &nbsp;
          <button type="button" className="btn btn-primary" onClick={this.addTomato}>ADD TO BURGER`</button>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
