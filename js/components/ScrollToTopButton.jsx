import React from 'react';
import ReactDOM from 'react-dom';


class ScrollToTopButton extends React.Component {

  handleOnClickScrollUp = (event, scrollDuration) => {
    event.preventDefault();
    let scrollValue = -window.scrollY / (scrollDuration / 20),
        scrollInterval = setInterval(function(){
        if ( window.scrollY != 0 ) {
            window.scrollBy( 0, scrollValue );
        }
        else clearInterval(scrollInterval);
    },15);
  }

  render() {
    return <div className='scroll-to-top' onClick={ event => this.handleOnClickScrollUp(event, 1000) }>^</div>
  }
}

module.exports = ScrollToTopButton;
