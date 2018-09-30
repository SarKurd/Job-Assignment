import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
  state = {
    showMobileNavBar: false
  };

  toggleNavBar = event => {
    const { showMobileNavBar } = this.state;
    if (event.target.tagName.toLowerCase() === "i") {
      this.setState({ showMobileNavBar: !showMobileNavBar });
      return;
    }
    this.setState({ showMobileNavBar: false });
  };

  render() {
    const { showMobileNavBar } = this.state;
    const closeBar = <i className="fa fa-times" />;
    const menuBar = <i className="fa fa-bars" />;
    return (
      <div className="Header">
        <div onClick={this.toggleNavBar} className="menu">
          {showMobileNavBar ? closeBar : menuBar}
        </div>

        <div className="logo">
          <hr />
        </div>

        <div
          className={`navigationList ${
            showMobileNavBar ? "navigationList--show" : "navigationList--hide"
          }`}
        >
          <ul className="routeList">
            <li>
              <NavLink
                onClick={this.toggleNavBar}
                className="nav-link"
                activeClassName="active-nav-link"
                exact
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={this.toggleNavBar}
                className="nav-link"
                activeClassName="active-nav-link"
                to="/people"
              >
                People
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={this.toggleNavBar}
                className="nav-link"
                activeClassName="active-nav-link"
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
