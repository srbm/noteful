import React, { Component } from 'react';
import './header.scss';

import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
        <Link to='/'>
          <h1>Noteful</h1>
        </Link>
      </header>
    )
  }
}

export default Header;