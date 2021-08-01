
import React, { Component } from 'react';
import Routes from './routes';
class App extends Component {
    render() {
        const childProps = {};
        return (
            <div className="app">
                <Routes childProps={childProps} />
            </div>
        )
    }
}

export default App;
