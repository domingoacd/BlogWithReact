import React, { Component } from 'react';
import "./head.css";
class Head extends Component {
    render() {
        return (
            <header className='row bg-primary text-center p-1'>
                <h1 className='col'>YoBlog</h1>
            </header>
        );
    }
}

export default Head;