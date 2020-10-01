import React from 'react';
import ReactDOM from 'react-dom';

class UserForm extends React.Component {



    render() {
        return (
            <form>
                <label>Enter Username:</label>
                <input></input>

            </form>

        );
    };
};




ReactDOM.render (<App/>, document.querySelector('#root'));