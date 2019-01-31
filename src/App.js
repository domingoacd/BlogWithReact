import React, {Component} from 'react';
import Default from './components/default/Default';
import Logged from './components/logged/Logged';

class App extends Component {
    render() {
        const userHasAccount = localStorage.getItem("hasAccount");
        if (userHasAccount) {
            return <Logged />;
        } else {
            return <Default />
        }
    }
}

export default App;