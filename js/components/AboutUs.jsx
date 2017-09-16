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
          <div className='about-us'><h4><a href='#'>About Us</a></h4><p>Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Aliquam sem. In hendrerit nulla quam nunc, accumsan congue.</p><p className='read-more'><a>read more...</a></p></div>
          <div id='menu' className='about-us'><h4><a href='#'>Our Menu</a></h4><p>Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi. Aliquam sem. In hendrerit nulla quam nunc, accumsan congue.</p><p className='read-more'><a>read more...</a></p></div>
          <div className='about-us about-us_services'><div className='about-us_photo'></div><div className='about-us_services-info'><h4><a href='#'>Our locations</a></h4><p>Ea dicit iudico persecuti qui, in debitis disputationi sed, regione omnesque eos in. Eu nec aeque partem deserunt, ad vel nullam numquam.</p></div></div>
          <div className='about-us'><h4><a href='#'>Our Recipes</a></h4><p>Aliquam erat ac ipsum. Integer aliquam purus. Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo vel bibendum sapien. Aliquam sem. In hendrerit nulla quam nunc, accumsan congue.</p><p className='read-more'><a>read more...</a></p></div>
        </div>
        </main>
      </div>
    </section>
  }
}

module.exports = AboutUs;
