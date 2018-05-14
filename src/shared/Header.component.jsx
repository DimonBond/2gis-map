import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div>
        <Link to="/main">Main pages</Link>
        <Link to="/author">Abaut author</Link>
        <Link to="/cabinet">User's cabinet</Link>
        <Link to="/registration">Registration</Link>
      </div>
    );
  }
}

// const Header = () => (
//   <h1>I'm header!</h1>
// );

export default Header;
