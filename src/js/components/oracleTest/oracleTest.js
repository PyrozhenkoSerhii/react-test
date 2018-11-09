import React from 'react'
import axios from 'axios'

import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

class OracleTest extends React.Component {
    constructor(props) {
        super()

        this.state = {
            id: 1000,
            title: '',
            price: 0,
            count: 0,
            company: 1000,
            updateCompanyId: 0,
            averageAge: 0
        }
    }

    componentDidMount() {
        this.fetchProducts()
        this.fetchUsers()
        this.fetchStock()
        this.getAverageAge()
    }


    fetchProducts = () => {
        axios.get('http://localhost:4000/products')
            .then(response => {
                console.log('products: ', response.data)
                this.setState({
                    ...this.state,
                    products: response.data
                })
            })
            .catch(err => console.log(err))
    }

    fetchUsers = () => {
        axios.get('http://localhost:4000/users')
        .then(response => {
            console.log('users: ', response.data)
            this.setState({
                ...this.state,
                products: response.data
            })
        })
        .catch(err => console.log(err))
    }

    fetchStock = () => {
        axios.get('http://localhost:4000/stock')
            .then(response => {
                console.log('stock: ', response.data)
                this.setState({
                    ...this.state,
                    products: response.data
                })
            })
            .catch(err => console.log(err))
    }

    getAverageAge = () => {
        axios.post('http://localhost:4000/users/averageAge', { company: this.state.updateCompanyId })
            .then(response => {
                this.setState({
                    averageAge: response.data
                })
            })
            .catch(err => console.log(err))
    }


    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    };
    handleSubmit = (e) => {
        e.preventDefault()
        const product = {
            id: this.state.id,
            title: this.state.title,
            count: this.state.count,
            price: this.state.price,
            company: this.state.company,
        }
        console.log('product:', product)
        axios.post('http://localhost:4000/products', { ...product })
            .then(response => {
                console.log(response)
                this.fetchProducts()
            })
            .catch(err => console.log(err))
    }



    updateCompanyId = (e) => {
        this.setState({
            updateCompanyId: e.target.value
        })
    }
    updateCompanyIdSubmit = (e) => {
        e.preventDefault()

        axios.post('http://localhost:4000/products/updateCompanyPrices', { company: this.state.updateCompanyId })
            .then(response => {
                console.log(response)
                this.fetchProducts()
            })
            .catch(err => console.log(err))
    }



    auditProducts = (e) => {
        e.preventDefault()

        axios.post('http://localhost:4000/products/updateAvailability', { company: this.state.updateCompanyId })
            .then(response => {
                console.log(response)
                this.fetchStock()
            })
            .catch(err => console.log(err))
    }


    render() {
        return (
            <div>
                <div>
                    <h3>Create product</h3>
                    <form onSubmit={this.handleSubmit}>
                        <FormGroup controlId="id" bsSize="large">
                            <ControlLabel>Id (Yes, it is, id)</ControlLabel>
                            <FormControl type="number" value={this.state.id} onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup controlId="title" bsSize="large">
                            <ControlLabel>Title</ControlLabel>
                            <FormControl type="text" value={this.state.title} onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup controlId="count" bsSize="small">
                            <ControlLabel>Quantity</ControlLabel>
                            <FormControl type="number" value={this.state.count} onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup controlId="price" bsSize="small">
                            <ControlLabel>Price</ControlLabel>
                            <FormControl type="number" value={this.state.price} onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup controlId="company" bsSize="small">
                            <ControlLabel>Company Id</ControlLabel>
                            <FormControl type="number" value={this.state.company} onChange={this.handleChange} />
                        </FormGroup>
                        <Button className="btn btn-success" type="submit">Create</Button>
                    </form>

                    <form onSubmit={this.updateCompanyIdSubmit}>
                        <FormGroup bsSize="large">
                            <ControlLabel>Company name for price update</ControlLabel>
                            <FormControl type="number" value={this.state.updateCompanyId} onChange={this.updateCompanyId} />
                        </FormGroup>
                        <Button className="btn btn-primary">Update Prices By company</Button>
                    </form>


                </div>

                <h3>Products</h3>
                {this.state.products &&
                    <table style={{ width: '100%', border: '1px dashed black', marginBottom: '30px' }}>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Company</th>
                        </tr>
                        {this.state.products.map(el => (
                            <tr key={el.id}>
                                <td>{el.id}</td>
                                <td>{el.title}</td>
                                <td>{el.count}</td>
                                <td>{el.price}</td>
                                <td>{el.company}</td>
                            </tr>
                        ))}
                    </table>
                }

                <Button className="btn btn-warning" onClick={this.auditProducts}>Audit products Quantity</Button>


                <h3>Users</h3>
                {this.state.users &&
                    <table style={{ width: '100%', border: '1px dashed black', marginBottom: '30px' }}>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Age</th>
                        </tr>
                        {this.state.products.map(el => (
                            <tr key={el.id}>
                                <td>{el.id}</td>
                                <td>{el.name}</td>
                                <td>{el.age}</td>
                            </tr>
                        ))}
                    </table>
                }

                <Button className="btn btn-primary" onClick={this.getAverageAge}>Get average age</Button>
                <h4>Average age is: {this.state.averageAge} </h4>


                <h3>Stock</h3>
                {this.state.stock &&
                    <table style={{ width: '100%', border: '1px dashed black', marginBottom: '30px' }}>
                        <tr>
                            <th>Id</th>
                            <th>Product</th>
                            <th>Description</th>
                        </tr>
                        {this.state.products.map(el => (
                            <tr key={el.id}>
                                <td>{el.id}</td>
                                <td>{el.product}</td>
                                <td>{el.description}</td>
                            </tr>
                        ))}
                    </table>
                }

            </div>
        )
    }
}

export default OracleTest