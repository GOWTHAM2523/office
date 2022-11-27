import logo from './logo.svg';
import './App.css';
import {Card} from './Components/Card/Card';
//import {Card} from "./Card";
//import {Image} from './Components/Image/Image';
//import React, {useState} from "react"

// var stocks = [
//   {name:'Tata Power', price: 200.00},
//   {name:'Reliance', price: 500.00},
// ]

function App() {

  // const [message, setMessage] = useState()

  // const onBuy = (company, count, price) => {
  //   setMessage(`Bought ${count} shares of ${company} at ${price} each`)
  // }

  return (
    <div className="App">
      <Card path={'https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg'}
        cardTitle={'Flying Bird'}
        subTitle={'Parrot'}
      />
    </div>
  );
}

export default App;
