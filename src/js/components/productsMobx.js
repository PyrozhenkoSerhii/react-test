import React, { Component } from 'react'
import { Product } from '../mobx/product'
import _ from 'lodash'

export default class ProductMobx extends Component {
    constructor(props) {
        super();
        this.state = {
            title: '',
            price: 0,
            count: 0
        }
    }

    onFormSubmit = () => this.props.store.addProduct(new Product(_.random(10000), this.state.title, this.state.price, this.state.count))
    onFormChange = e => this.setState({ [e.target.id]: e.target.value })

    render() {
        const store = this.props.store;
        return (
            <div>
                <h3>Products</h3>
                <p>Create a new product</p>
                <input onChange={store.addProduct()}></input>
                {this.props.store.products.map(el => (
                    <div key={el.id}>
                        <p>el.title</p>
                        <p>el.price</p>
                        <p>el.count</p>
                    </div>
                ))}

            </div>
        )
    }
}