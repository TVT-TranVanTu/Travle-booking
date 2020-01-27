import React, { Component } from 'react'
import Mathead from './Mathead'
import Search from './Search'
import Reason from './Reason'
import HotPlace from './HotPlace'
import InternationalPlace from './InternationalPlace'
import Achievement from './Achievement'
import MediaTracking from './MediaTracking'
import Footer from '../Footer/Footer'

export default class Home extends Component {
    render() {
        return (
            <div className="home-pages">
                <Mathead></Mathead>
                <Search></Search>
                <Reason></Reason>
                <HotPlace></HotPlace>
                <InternationalPlace></InternationalPlace>
                <Achievement></Achievement>
                <MediaTracking></MediaTracking>
                <hr className="hr-items"></hr>
                <Footer></Footer>
            </div>
        )
    }
}
