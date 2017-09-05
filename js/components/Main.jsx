import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav.jsx'

class Main extends React.Component {

  render() {
    return <div className='col-12'>
      <Nav/>
      { this.props.children }
    </div>
  }
}

module.exports = Main;
