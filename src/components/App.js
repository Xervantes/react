import React, {Component} from 'react';
import './App.css';
import Product from './Product';
//import PropTypes from "prop-types";


const relatedProducts = ['secondProduct', 'thirdProduct'];
const products = [
    {name: 'firstProduct', price: '$5.00', quanity: 3, relatedProducts: relatedProducts},
    {name: 'secondProduct', price: '$10.00', quanity: 4},
    {name: 'thirdProduct', price: '$15.00', quanity: 1, relatedProducts: relatedProducts}
];


class App extends Component {
    whatGotClicked = (what) => console.log(what, 'you added a', {what}, 'to the cart');

    render() {
        const renderProducts = products.map((product, index) => {
            return <Product key={index} product={product} cb={this.whatGotClicked}/>
        });
        return (
            <div className="App">
                {renderProducts}
            </div>
        );
    }
}


export default App;
