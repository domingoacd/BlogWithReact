import React, { Component } from 'react';
import Head from '../head/Head';
import Foot from '../foot/Foot';
import './default.css';
class Default extends Component {
    render() {
        return (
            <div class='container-fluid'>
                <Head />
                <section className='row text-center'>
                    <p className='col-12 m-auto'>Create your own blog! Free, fast and easy!</p>
                    <a className='col-3 col-sm-3 col-md-2 m-auto btn btn-success' href='../../../public/register.html'> Log in</a>
                </section> 
                <Foot />
            </div>
        );
    }
}

export default Default;