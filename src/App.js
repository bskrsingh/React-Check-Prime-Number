import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(){
    super()

    this.state = {
      number:'',
      msg:''
    }
  }

  checkPrime(e){
    debugger
    let num = e.target.value;
    let message;
    if(num >= 2){
      if(num == 2){
        message = "Prime";
      }else{
        let prime = true;
        for(let i =2; i<num; i++){
          if(num % i ==0){
            prime = false;
            break;
          }
        }
        if(prime){
          message = "Prime"
        }else{
          message = "Not Prime"
        }
      } 
    }else if(num == ''){
      message = 'Enter Number'
    }else {
      message = "Not Prime"
    }

    this.setState({
      number : num,
      msg : message
    })
  }

render(){
  return (
    <div className="App">
      <header className="">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Check Prime Number
        </p>
      </header>
      <input type="number" value={this.state.number} onChange={this.checkPrime.bind(this)} />
      <p>{this.state.msg}</p>
    </div>
  );
}
}

export default App;
