// import './App.css';
import React, { Component } from "react";
import Logo from "./logo.svg";
import "./style.css";
import Header from "../components/Header";
import "./home.css";

class Home extends Component {
  state = {
    showButton: false,
    longURL: "",
    slug: "",
    shortURL: process.env.REACT_APP_BACKEND_GET_URL + this.slug,
  };

  handleChange = (event) => {
    this.setState({ longURL: event.target.value });
  };

  callAPI = async () => {
    const response = await fetch(process.env.REACT_APP_BACKEND_GREATE_URL, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        url: this.state.longURL,
      }),
    });
    if (response.ok) {
      const result = await response.json();
      console.log(result);
      this.setState({
        slug: result.shortURL,
        shortURL: result.shortURL,
        showButton: true,
      });
      console.log(this.state.shortURL);
    } else if (response.status === 400) {
    } else {
      const result = await response.json();
      this.error = result.message;
    }
  };

  render() {
    return (
      <div>
        <Header />
        <div id="main">
          <div id="form">
            <img src={Logo} className="logo" alt="logo"/>
            <div>
                <input
                  className="input"
                  type="text"
                  placeholder="url goes here"
                  id="userInput"
                  onChange={this.handleChange}
                />
              <br/>
              <button id="myButton" onClick={this.callAPI}>
                compress
              </button>
            </div>
            <div
              id="slugOutput"
              style={{ display: this.state.showButton ? "block" : "none" }}
            >
              <h2 id="compressedURLText">&darr; your compressed url &darr;</h2>
              <a href={"https://www.cmprs.it/" + this.state.shortURL}>
                {"cmprs.it/" + this.state.shortURL}
              </a>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
