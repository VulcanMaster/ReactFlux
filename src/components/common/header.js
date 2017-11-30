"use strict";

var React = require('react');
// var Link = require('react-router').Link;

var Header = React.createClass({
  render: function () {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          {/* <Link to="/" className="navbar-brand"> */}
          <img src="images/pluralsight-logo.png" style={{ float: 'left', marginTop: '15px' }} />
          {/* </Link> */}
          <ul className="nav navbar-nav">
            {/* <li><Link to="/">Home</Link></li>
              <li><Link to="authors">Authors</Link></li>
              <li><Link to="about">About</Link></li> */}
            <li><a href="/">Home</a></li>
            <li><a href="/#authors">Authors</a></li>
            <li><a href="/#about">About</a></li>
          </ul>
        </div>
      </nav>
    );
  }
});

module.exports = Header;