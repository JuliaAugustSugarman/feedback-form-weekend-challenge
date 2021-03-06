import React, { Component } from 'react';
import { connect } from 'react-redux';

class Review extends Component {

    handleClick = () => {
        console.log('/review new feedback clicked');
        this.props.history.push('/');
    }
    render() {
        return (
            <div>
                <div>
                    <h2>Thank you!</h2>
                    <button onClick={this.handleClick}>Leave New Feedback</button>
                </div>
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Review);
