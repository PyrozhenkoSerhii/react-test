import React from 'react';
import ProductList from './product/ProductList';
import ProductCreator from './product/ProductCreator';

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <h2>Product list</h2>
                <ProductList/>
                <h2>Create product</h2>
                <ProductCreator/>
            </div>
        );
    }
}