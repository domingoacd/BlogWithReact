import React, { Component } from 'react';
import Head from '../head/Head';
import Foot from '../foot/Foot';
class Default extends Component {
    render() {
        return (
            <div class='container-fluid p-0'>
                <Head />
                <section className='row text-center'>
                    <p className='col-12'>Do you want to play?</p>
                    <button className='col-12 btn btn-success'> Log in</button>
                </section> 
                <Foot />
            </div>
        );
    }
}

export default Default;