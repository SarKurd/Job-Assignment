import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../Styles/components/header.scss";

class Header extends Component {
  state = {
    showMobileNavBar: false
  };

  toggleNavBar = () => {
    const { showMobileNavBar } = this.state;
    this.setState({ showMobileNavBar: !showMobileNavBar });
  };

  render() {
    const { showMobileNavBar } = this.state;

    const closeBar = <i class="fa fa-times" />;
    const menuBar = <i class="fa fa-bars" />;

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
