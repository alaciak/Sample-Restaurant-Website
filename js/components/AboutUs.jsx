import React from 'react';
import ReactDOM from 'react-dom';

class AboutUs extends React.Component {

  render() {
    return <section id='about-us'>
      <div className='container'>
        <div className='row welcome-text'>
          <h2>Welcome to our <span>delishous cuisine</span></h2>
          <p>Cum sociis natoque penatibus et ultrices volutpat. Nullam wisi ultricies a, gravida vitae, dapibus risus ante sodales lectus blandit eu, tempor diam pede cursus vitae, ultricies eu, faucibus quis., porttitor eros cursus lectus, pellentesque eget, bibendum a, gravida ullamcorper quam. Nullam viverra consectetuer. Quisque cursus et, porttitor risus</p>
          <div className='button-read-more'>READ MORE</div>
        </div>
        <main>
        <div className='col-6 section-about-us'>
          <div><h4>About Us</h4><p>Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Aliquam sem. In hendrerit nulla quam nunc, accumsan congue.</p></div>
          <div><h4>Our recipes</h4><p>Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi. Aliquam sem. In hendrerit nulla quam nunc, accumsan congue.</p></div>
          <div className='about-us_photo'></div>
          <div><h4>Our services</h4><p>Aliquam erat ac ipsum. Integer aliquam purus. Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo vel bibendum sapien. Aliquam sem. In hendrerit nulla quam nunc, accumsan congue.</p></div>
        </div>
        </main>
      </div>
    </section>
  }
}

module.exports = AboutUs;
