import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Default from './components/default/Default';
import Logged from './components/logged/Logged';

class App extends Component {
    static propTypes = {
        children: PropTypes.object.isRequired
    }
    render() {
        const userHasAccount = localStorage.getItem("hasAccount");
        const { children } =  this.props;
        if (userHasAccount) {
            return <Logged />;
        } else {
            return <Default />
        }
    }
}

export default App;