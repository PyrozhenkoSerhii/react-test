import React from 'react';
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {user: state.userReducer.user};
};

class Home extends React.Component {
    render() {
        return (
            <div>
                <h2>Welcome, {this.props.user.username}</h2>
            </div>
        );
    }
}

export default connect(mapStateToProps, null)(Home);