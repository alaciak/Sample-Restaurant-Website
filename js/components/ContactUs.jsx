import React from 'react';

class ContactUs extends React.Component {



  render() {
    return <section id='contact-us' className='contact-us'>
      <div className='container'>
        <div className='row'>
          <h2><span>CONTACT</span> US</h2>
          <div className='col-1 contact-icon'></div>
          <div className='col-3 contact-info'>
            <p>Phone</p>
            <span>+48 12345678</span>
          </div>
          <div className='col-1 contact-icon'></div>
          <div className='col-3 contact-info'>
            <p>Address</p>
            <span>Lorem ipsum dolor, 12345</span>
          </div>
          <div className='col-1 contact-icon'></div>
          <div className='col-3 contact-info'>
            <p>Email</p>
            <span><a href='mailto:mail@mail.com'>mail@mail.com</a></span>
          </div>
        </div>
      </div>

    </section>
  }
}

module.exports = ContactUs;
