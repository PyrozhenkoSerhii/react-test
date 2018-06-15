import React from "react";
import {connect} from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import {deleteProduct} from "../../actions/productAction";

const mapStateToProps = (state) => {
    return {products: state.productReducer.products};
};
const mapDispatchToProps = (dispatch) => {
    return {
        deleteProduct: product => dispatch(deleteProduct(product))
    };
};

class ProductList extends React.Component {
    handleDelete = (e) => {
        this.props.deleteProduct({id: e.target.id});
    };

    render() {
        return (
            <div>
                <ul className="list-group list-group-flush">
                    {this.props.products.map(el => (
                        <div key={el.id}>
                            <div className="row">
                                <div className="col-md-9">
                                    <li className="list-group-item">{el.title}</li>
                                </div>
                                <div className="col-md-2">
                                    <button className="btn btn-danger" id={el.id} onClick={this.handleDelete}>
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