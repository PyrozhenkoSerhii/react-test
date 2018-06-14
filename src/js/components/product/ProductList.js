import React from "react";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {products: state.products};
};

const ConnectedList = ({products}) => (
    <ul className="list-group list-group-flush">
        {products.map(el => (
            <li className="list-group-item" key={el.id}>
                {el.title}
            </li>
        ))}
    </ul>
);
const List = connect(mapStateToProps)(ConnectedList);
export default List;