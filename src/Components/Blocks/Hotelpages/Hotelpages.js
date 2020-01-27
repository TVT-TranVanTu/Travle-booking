import React, { Component } from 'react';
import Searchhotel from './Searchhotel';
import Footer from '../Footer/Footer';
import LeftBar from './LeftBar';

export default class Hotelpages extends Component {
    render() {
        return (
            <div className="hotel-pages">
                <Searchhotel></Searchhotel>
                <LeftBar></LeftBar>
                <hr className="hr-items"/>
                <Footer></Footer>
            </div>
        )
    }
}
