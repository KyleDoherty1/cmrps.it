import React from "react";
import './header.css'
class Header extends React.Component {
  render() {
    return (
      <nav id ="navbar">
        <div className="container">
        <h1>CMPRS.IT</h1>
            {process.env.REACT_APP_ACCOUNT_ENABLED === 'true' ?
                <ul>
                    <li><i className="fa fa-user fa-2x"/><a className="current" href="index.html"> My Account</a></li>
                </ul>
                : null
            }
        </div>
      </nav>
    );
  }
}






export default Header;
