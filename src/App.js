import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';

class Addon extends Component
{
  constructor(props)
  {
    super(props);
    this.state={items:[{item:'',count:[]}],cost:0};
  }
  render()
  {
    // var newState={items:[],cost:0};
    // newState.items.push(this.props.item);
    // newState.cost++;
    // console.log(newState);
    // this.setState(newState);

    this.state.items[0].item=(this.props.item);
    for(var i=0;i<this.props.count;i++)
    {
      this.state.items[0].count.push(this.props.item);
    }


return(<div>
  {
               this.state.items[0].count.map(
                                        function (t)
                                        {
                                          let img="/images/"+t+'.jpg'+"";
                                            return(<div><img height='150' width='300' src={img} /><br /></div>);

                                          }
                                        )

  }</div>


);


}
}

function addItem(name,count)
{

  ReactDOM.render(<Addon item={name} count={count} />,document.getElementById('addON'));
}
class App extends Component {

  addPatty()
  {
    if(!document.getElementById('Patty').value)
    {
      document.getElementById('Patty').value=0;
    }
    document.getElementById('Patty').value=parseInt(document.getElementById('Patty').value)+1;
    addItem('Patty',1);
  }
  addOnion()
  {
    if(!document.getElementById('Onion').value)
    {
      document.getElementById('Onion').value=0;
    }
    document.getElementById('Onion').value=parseInt(document.getElementById('Onion').value)+1;
    addItem('Onion',1);
  }
  addTomato()
  {
    if(!document.getElementById('Tomato').value)
    {
      document.getElementById('Tomato').value=0;
    }
    document.getElementById('Tomato').value=parseInt(document.getElementById('Tomato').value)+1;
    addItem('Tomato',1);
  }
  render() {

    return (
      <div className="App">
        <div className='header'>
            <div className='logo col-md-3'>LOGO WILL COME HERE</div>
            <div className='title col-md-7'><h1>Mata Vaishno Burger point</h1></div>
        </div>
        <div className='flexer'>

            <div className='adder jumbotron'>
                    <div className='item'>
                        Patty  : <button type="button" onClick={this.addPatty}>+</button><input type="text" id='Patty' disabled/><button type="button" onclick=''>-</button>
                    </div>
                    <br />
                    <div className='item'>
                        Onion  : <button type="button" onClick={this.addOnion}>+</button><input type="text" id='Onion' disabled/><button type="button" onclick=''>-</button>
                    </div>
                    <br />
                    <div className='item'>
                Tomato  : <button type="button" onClick={this.addTomato}>+</button><input type="text" id='Tomato' disabled/><button type="button" onclick=''>-</button>
                    </div>

          </div>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
          <div className='Burger-Preview'>
                 <img src='/images/top-bun.png' height='150' width='300'/><br />
                 <div id='addON'>


                 </div>
                 <img src='/images/bottom-bun.jpg' />

          </div>

        </div>

      </div>
    );
  }
}

export default App;
