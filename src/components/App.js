import React, { Component } from 'react';
import './App.css';
import Product from './Product';
//import PropTypes from "prop-types";


const relatedProducts = ['secondProduct', 'thirdProduct'];
const products = [
  { name: 'firstProduct', price: '$5.00', quanity: 3, relatedProducts: relatedProducts},
  { name: 'secondProduct', price: '$10.00', quanity: 4},
  { name: 'thirdProduct', price: '$15.00', quanity: 1, relatedProducts: relatedProducts}
];

const renderProducts = products.map((product, index) => {
  return <Product key={index} product={product}/>
});

class App extends Component {
  render() {
    return (
      <div className="App">
        {renderProducts}
      </div>
    );
  }
}


export default App;
