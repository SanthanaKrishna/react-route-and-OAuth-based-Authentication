import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
        {/* //bad Approach,Bcoz Dom in create broweser for every hit link using herf tag
             <a href="/pageTwo">Navigate to page two</a> */}
                <Link to="/" className="item">
                    Stream
                </Link>
            <div className="right menu">
                 <Link to="/" className="item">
                    All Streams
                 </Link>
            </div>
        </div>
    )
};

export default Header;