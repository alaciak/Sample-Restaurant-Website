import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav.jsx';
import Banner from './Banner.jsx';

class Header extends React.Component {

  render() {
    return <header className='banner'>
        <Nav />
        <Banner />
    </header>
  }
}

module.exports = Header;
