import React from 'react';
import MediaQuery from 'react-responsive';

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

  onClickHandler = event => {
    if (this.state.menuDisplayStyle === 'block') {
      this.setState({menuDisplayStyle: 'none'});
    } else {
      this.setState({menuDisplayStyle: 'block'});
    }
  }

  render() {
    return <nav style={{
      position: this.state.position
    }}>
    <div className='container'>
      <div className='row'>
          <div className='col-4 logo'>
            <p>Your<span>Restaurant</span>
            </p>
          </div>
          <div className='col-8'>
            <MediaQuery query='(max-device-width: 639px)'>
              <div className="menu" style={{
                display: 'block'
              }} onClick={this.onClickHandler}>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <ul className='dropdown-menu list-show' style={{
                display: this.state.menuDisplayStyle
              }}>
                <li>
                  <a href='#'>About us</a>
                </li>
                <li>
                  <a href='#'>Book a table</a>
                </li>
                <li>
                  <a href='#'>Gallery</a>
                </li>
                <li>
                  <a href='#'>Contact us</a>
                </li>
              </ul>
            </MediaQuery>
            <MediaQuery query='(min-device-width: 640px)'>
              <div className="menu" style={{
                display: 'none'
              }}>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <ul className='dropdown-menu' style={{
                display: 'block'
              }}>
                <li>
                  <a href='#'>About us</a>
                </li>
                <li>
                  <a href='#'>Book a table</a>
                </li>
                <li>
                  <a href='#'>Gallery</a>
                </li>
                <li>
                  <a href='#'>Contact us</a>
                </li>
              </ul>
            </MediaQuery>
          </div>
      </div>
      </div>
    </nav>
  }
}

module.exports = Nav;
