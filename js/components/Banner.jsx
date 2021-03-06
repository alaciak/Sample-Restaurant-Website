import React from 'react';

class BannerItem extends React.Component {
  render() {
    return <div style={ this.props.display }>
    <h1 className='banner-heading'>{ this.props.heading }</h1>
    <p className='banner-info'>{ this.props.info }</p>
  </div>
  }
}

class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      elements: [
        <BannerItem display={ this.props.display } heading='Lorem ipsum dolor' info='Etiam ullamcorper. Suspendisse a pellentesque dui, non felis.'/>,
        <BannerItem display={ this.props.display } heading='Cras nec augue' info='Phasellus eu vulputate purus, a finibus arcu. Nunc eleifend vehicula eleifend.'/>,
        <BannerItem display={ this.props.display } heading='Vivamus et vehicula' info='Maecenas tincidunt finibus rhoncus. In efficitur aliquam risus sed euismod.'/>
      ],
      index: 0,
      display: 'none'
    }
  }

  handlePreviousShow = event => {
      if (this.state.index < 1) {
        this.setState({
          index: this.state.elements.length - 1,
          display: 'inline-block'
        });
      } else {
        this.setState({
          index: this.state.index - 1,
          display: 'inline-block'
        });
      }
  }

  handleNextShow = event => {
      if (this.state.index >= this.state.elements.length - 1) {
        this.setState({
          index: 0,
          display: 'inline-block'
        });
      } else {
        this.setState({
          index: this.state.index + 1,
          display: 'inline-block'
        });
      }
  }

    render() {
      return <div className='container'>
      <div className='row banner-text'>
        <div className='arrow-left' onClick={ this.handlePreviousShow }>&lt;</div>
          { this.state.elements[this.state.index] }
        <div className='arrow-right' onClick={ this.handleNextShow }>&gt;</div>
      </div>
      </div>
    }
  }

module.exports = Banner;
