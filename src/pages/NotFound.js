import React from "react";
import Logo from './logo.svg';

const NotFound = () => {
    return (
        <div className='box has-text-centered main box-color content'>
        <img src={Logo} className="logo" />
        <h1>404 - woops! Something has gone missing.. :(</h1>
            <a href="/">back to cmprs.it</a>
        </div>
    )
}
export default NotFound;
