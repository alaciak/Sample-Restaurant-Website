import React from 'react';
import ReactDOM from 'react-dom';

class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      elements: [
        <BannerItem heading='Lorem ipsum dolor' info='Etiam ullamcorper. Suspendisse a pellentesque dui, non felis.'/>,
        <BannerItem heading='Cras nec augue' info='Phasellus eu vulputate purus, a finibus arcu. Nunc eleifend vehicula eleifend.'/>,
        <BannerItem heading='Vivamus et vehicula libero' info='Maecenas tincidunt finibus rhoncus. In efficitur aliquam risus sed euismod.'/>
      ]
    }
  }

  render() {
    return <div className='container'>
    <div className='row banner-text'>
      <div className='arrow-left' onClick={ this.handlePreviousShow }>&lt;</div>
        { this.state.elements[0] }
      <div className='arrow-right' onClick={ this.handleNextShow }>&gt;</div>
    </div>
    </div>
  }
}

class BannerItem extends React.Component {
  render() {
    return <div>
    <h1 className='banner-heading'>{ this.props.heading }</h1>
    <p className='banner-info'>{ this.props.info }</p>
  </div>
  }
}

module.exports = Banner;
