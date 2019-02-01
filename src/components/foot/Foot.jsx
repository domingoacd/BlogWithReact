import React, { Component } from 'react';

class Foot extends Component {
    render() {
        return (
            <footer 
                className='row bg-secondary text-white px-5 py-1 position-fixed fixed-bottom'
            >
                <p className='p-0'>
                    This is a test app. Be aware that, if you clean your browser
                    history, it may delete the app info.
                </p>
            </footer>
        );
    }
}

export default Foot;