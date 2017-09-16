import React from 'react';
import MediaQuery from 'react-responsive';
import AboutUs from './AboutUs.jsx';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuButtonDisplayStyle: 'block',
      menuDisplayStyle: 'none',
      navPosition: 'static',
      menuAddClass: 'list-show'
    }
  }

  showMenuOnClickHandler = event => {
    if (this.state.menuDisplayStyle === 'block') {
      this.setState({
        menuDisplayStyle: 'none'
      });
    } else {
      this.setState({
        menuDisplayStyle: 'block'
      });
    }
  }
menuOnClickHandler = event => {
  this.setState({
    menuDisplayStyle: 'none'
  });
}

  render() {
    return <nav style={{ position: this.state.position }}>
      <div className='container'>
        <div className='row'>
          <div className='col-4 logo'>
            <p><a href='#'>Your<span>Restaurant</span></a></p>
          </div>
          <div className='col-8'>
            <MediaQuery query='(max-width: 639px)'>
              <div className="menu" style={{ display: 'block' }} onClick={ this.showMenuOnClickHandler }>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <ul className='dropdown-menu list-show' style={{ display: this.state.menuDisplayStyle }}>
                <li><a href='#about-us' onClick={ this.menuOnClickHandler }>About us</a></li>
                <li><a href='#menu' onClick={ this.menuOnClickHandler } >Menu</a></li>
                <li><a href='#reservation' onClick={ this.menuOnClickHandler } >Book a table</a></li>
                <li><a href='#contact-us' onClick={ this.menuOnClickHandler } >Contact us</a></li>
              </ul>
            </MediaQuery>
            <MediaQuery query='(min-width: 640px)'>
              <ul className='dropdown-menu' style={{ display: 'block'}}>
                <li><a href='#about-us' onClick={ this.menuOnClickHandler }>About us</a></li>
                <li><a href='#menu' onClick={ this.menuOnClickHandler } >Menu</a></li>
                <li><a href='#reservation' onClick={ this.menuOnClickHandler } >Book a table</a></li>
                <li><a href='#contact-us' onClick={ this.menuOnClickHandler } >Contact us</a></li>
              </ul>
            </MediaQuery>
          </div>
        </div>
      </div>
    </nav>
  }
}

module.exports = Nav;
