import React from 'react';
import PropTypes from 'prop-types';

const Product = ({product}) => {
    const {name, price, quanity, relatedProducts} = product;
    const actFast = quanity < 5 ? <h3>Only {quanity} left in stock! Act Fast!</h3> : null;
    const relatedProductList = relatedProducts ?
        relatedProducts.map((product, index) => <li key={index}>{product}</li>): null;
    return (
        <div>
            {actFast}
            <p>{name} {price}</p>
            <button>Click to Purchase</button>
            <ul>
                {relatedProductList}
            </ul>
        </div>
    );
};

// Product.propTypes = {
//     //product: PropTypes.object.isRequired
//     name: PropTypes.string.isRequired,
//     price: PropTypes.string.isRequired
//
// };
Product.propTypes = {
    product: PropTypes.shape({
        name: PropTypes.string,
        price: PropTypes.string
    })
}

export default Product;