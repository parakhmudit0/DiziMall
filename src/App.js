
import React, { Component } from 'react';
import Routes from './routes';
import Inquiry from './components/Inquiry';
class App extends Component {
    render() {
        const childProps = {};
        return (
            <div className="app">
                <Inquiry />
            </div>
        )
    }
}

export default App;
