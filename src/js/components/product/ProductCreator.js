import React from "react";
import {connect} from "react-redux";
import {addProduct} from "../../actions/productAction";
import uuid from 'uuid';

import {FormGroup} from 'react-bootstrap';
import {ControlLabel} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

const mapDispatchToProps = (dispatch) => {
    return {
        addProduct: product => dispatch(addProduct(product))
    };
};

class ProductCreator extends React.Component {
    constructor() {
        super();
        this.state = ({
            title: '',
            id: ''
        })
    }

    validateForm() {
        return this.state.title.length > 0;
    }

    handleChange = (e) => {
        this.setState({title: e.target.value, id: uuid()})
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addProduct(this.state);
        this.setState({title: ''});
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="title" bsSize="large">
                        <ControlLabel>Title</ControlLabel>
                        <FormControl type="text" value={this.state.title} onChange={this.handleChange}/>
                    </FormGroup>
                    <Button disabled={!this.validateForm()} className="btn btn-success" type="submit">Create</Button>
                </form>
            </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(ProductCreator)