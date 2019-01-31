import React, { Component } from 'react';

class Foot extends Component {
    render() {
        return (
            <footer 
                className='row bg-secondary p-1 text-white position-fixed fixed-bottom'
            >
                <p>
                    This is a test app. Be aware that, if you clean your browser
                    history, it may delete the app info.
                </p>
            </footer>
        );
    }
}

export default Foot;