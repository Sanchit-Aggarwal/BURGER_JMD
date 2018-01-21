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
                                            let img="images/"+t+'.jpg'+"";
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
    document.getElementById('total').value= parseInt(document.getElementById('total').value)+25;

    addItem('Patty',1);
  }
  removePatty()
  {
    if(document.getElementById('Patty').value==='0')
    {
      alert("First add some crispy Patty :)")
    }
    else {
      addItem('Patty',-1);
      document.getElementById('Patty').value=parseInt(document.getElementById('Patty').value)-1;
      document.getElementById('total').value= parseInt(document.getElementById('total').value)-25;
    }
  }
  addOnion()
  {
    if(!document.getElementById('Onion').value)
    {
      document.getElementById('Onion').value=0;
    }
    document.getElementById('Onion').value=parseInt(document.getElementById('Onion').value)+1;
    document.getElementById('total').value= parseInt(document.getElementById('total').value)+10;
    addItem('Onion',1);
  }
  removeOnion()
  {

    if(document.getElementById('Onion').value==='0')
    {
      alert("First add some fresh Onion :)")
    }
    else
    {
      addItem('Onion',-1);
      document.getElementById('Onion').value=parseInt(document.getElementById('Onion').value)-1;
      document.getElementById('total').value= parseInt(document.getElementById('total').value)-10;

    }

  }
  addTomato()
  {
    if(!document.getElementById('Tomato').value)
    {
      document.getElementById('Tomato').value=0;
    }
    document.getElementById('Tomato').value=parseInt(document.getElementById('Tomato').value)+1;
    document.getElementById('total').value= parseInt(document.getElementById('total').value)+10;

    addItem('Tomato',1);
  }
    removeTomato()
  {

    if(document.getElementById('Tomato').value==='0')
    {
      alert("First add some juicy Tomatoes :)")
    }
    else
     {
       addItem('Tomato',-1);
       document.getElementById('Tomato').value=parseInt(document.getElementById('Tomato').value)-1;
       document.getElementById('total').value= parseInt(document.getElementById('total').value)-10;

    }

  }
  checkout()
  {
    if(document.getElementById('total').value=='20')
    {
      alert('Oh Oh,Empty burger looks bad! Do add some ingredients :(');
    }
    else {
      alert('Order Placed! Get Ready to Dig in!');
    }

  }
  render() {

    return (
      <div className="App">
        <div className='header'>
            <div className='logo col-md-3'><img src="/images/logo.png" height='50' width='50'/></div>
            <div className='title col-md-7'><h1>Mata Vaishno Burger point</h1></div>
        </div>
        <div className='flexer'>

            <div className='adder jumbotron'>
                    <div className='item'>
                        Patty (₹ 25/-) :    <button type="button" class='btn' onClick={this.addPatty}>+</button>&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" id='Patty' value='0' align='center' disabled/><button class='btn'type="button" onClick={this.removePatty}>-</button>
                    </div>
                    <br />
                    <div className='item'>
                        Onion (₹ 10/-) :    <button type="button" class='btn' onClick={this.addOnion}>+</button>&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" id='Onion' value='0' disabled/><button class='btn' type="button" onClick={this.removeOnion}>-</button>
                    </div>
                    <br />
                    <div className='item'>
                Tomato (₹ 10/-) : <button type="button" class='btn' onClick={this.addTomato}>+</button>&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" id='Tomato' value='0' disabled/><button class='btn' type="button" onClick={this.removeTomato}>-</button>
                    </div>
                    <br />
                    TOTAL:₹  <input type='text' id='total' value='20' disabled/>
                  <span id="makeOrange"><button type="button" class='btn' onClick={this.checkout}>Checkout</button></span>

          </div>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
          <div className='Burger-Preview'>
                 <img src='/images/top-bun.png' height='80' width='300'/><br />
                 <div id='addON'>


                 </div>
                 <img src='/images/bottom-bun.jpg' height='80' width='300' />

          </div>
          <div><img src="/images/welcome.png" /></div>

        </div>

      </div>
    );
  }
}

export default App;
