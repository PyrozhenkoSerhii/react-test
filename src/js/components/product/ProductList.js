import React from "react";
import {connect} from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import {deleteProduct, fetchProductsAsync} from "../../redux/actions/product";

const mapStateToProps = (state) => {
    return {products: state.product.products};
};
const mapDispatchToProps = (dispatch) => {
    return {
        deleteProduct: product => dispatch(deleteProduct(product)),
        fetchProducts: (data) => dispatch(fetchProductsAsync(data))
    };
};

class ProductList extends React.Component {
    handleDelete = (e) => { 
        this.props.deleteProduct({_id: e.target.id});
    };
    componentDidMount() {
        this.props.fetchProducts('some_data')
    }
    

    render() {
        return (
            <div>
                <ul className="list-group list-group-flush">
                    {this.props.products.map(el => (
                        <div key={el._id}>
                            <div className="row">
                                <div className="col-md-10">
                                    <li className="list-group-item">{el.title}</li>
                                </div>
                                <div className="col-md-2">
                                    <button className="btn btn-danger  buttonContainer" id={el._id} onClick={this.handleDelete}>
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </ul>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)