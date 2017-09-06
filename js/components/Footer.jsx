import React from 'react';
import ReactDOM from 'react-dom';

class Footer extends React.Component {



  render() {
    return <footer>
      <div className='container'>
        <div className='row footer'>
          <div className='col-4 logo'>
            <p>Your<span>Restaurant</span></p>
          </div>
          <div className='col-4'></div>
          <div className='col-4 social-media'></div>
        </div>
      </div>
    </footer>
  }
}

module.exports = Footer;
