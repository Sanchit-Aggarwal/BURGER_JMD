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

    //this.state.items.push(this.props.item);
    if(this.props.flag===-1)
    {
         for(let i=this.state.items.length-1;i>=0;i--)
         {
           if(this.state.items[i]===this.props.item)
           {
             this.state.items[i]='';
             break;
           }
         }
    }
    else {
      this.state.items.push(this.props.item);

    }



return(<div>
  {
               this.state.items.map(
                                        function (t)
                                        {
                                            if(t!=='')
                                            {
                                            let img="/images/"+t+'.jpg'+"";
                                            return(<div><img height='80' width='300' src={img} /><br /></div>);
                                          }

                                          }
                                        )

  }</div>


);


}
}

function addItem(name,flag)
{

  ReactDOM.render(<Addon item={name} flag={flag} />,document.getElementById('addON'));
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
  removePatty()
  {

    addItem('Patty',-1);
    document.getElementById('Patty').value=parseInt(document.getElementById('Patty').value)-1;
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
  removeOnion()
  {

    addItem('Onion',-1);
    document.getElementById('Onion').value=parseInt(document.getElementById('Onion').value)-1;
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
  removeTomato()
  {

    addItem('Tomato',-1);
    document.getElementById('Tomato').value=parseInt(document.getElementById('Tomato').value)-1;
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
                        Patty  : <button type="button" onClick={this.addPatty}>+</button><input type="text" id='Patty' disabled/><button type="button" onClick={this.removePatty}>-</button>
                    </div>
                    <br />
                    <div className='item'>
                        Onion  : <button type="button" onClick={this.addOnion}>+</button><input type="text" id='Onion' disabled/><button type="button" onClick={this.removeOnion}>-</button>
                    </div>
                    <br />
                    <div className='item'>
                Tomato  : <button type="button" onClick={this.addTomato}>+</button><input type="text" id='Tomato' disabled/><button type="button" onClick={this.removeTomato}>-</button>
                    </div>

          </div>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
          <div className='Burger-Preview'>
                 <img src='/images/top-bun.png' height='80' width='300'/><br />
                 <div id='addON'>


                 </div>
                 <img src='/images/bottom-bun.jpg' height='80' width='300' />

          </div>

        </div>

      </div>
    );
  }
}

export default App;
