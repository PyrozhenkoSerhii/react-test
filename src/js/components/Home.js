import React from 'react';
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        user: state.user.user,
        asyncState: state.uiAsync.productPending
    };
};

class Home extends React.Component {
    render() {
        return (
            <div>
                <h2>Welcome, {this.props.user.username}</h2>
                {this.props.mobxStore.history.map((el) => (
                    <div key={el.key}>
                        Count: {el.count}<br />
                        Price: {el.price}
                    </div>
                ))}
            </div>
        );
    }
}

export default connect(mapStateToProps, null)(Home);