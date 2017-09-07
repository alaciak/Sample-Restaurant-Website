import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.jsx';
import AboutUs from './AboutUs.jsx';
import Reservation from './Reservation.jsx';
import ContactUs from './ContactUs.jsx';
import ScrollToTopButton from './ScrollToTopButton.jsx';
import Footer from './Footer.jsx';
import Main from './Main.jsx';
import '../../scss/style.scss';
import {
  Router,
  Route,
  Link,
  IndexLink,
  IndexRoute,
  hashHistory
} from 'react-router';

class App extends React.Component {

  render() {
    return <div>
      <Header/>
      <AboutUs />
      <Reservation />
      <ContactUs />
      <ScrollToTopButton />
      <Footer />
    </div>
  }
}

document.addEventListener('DOMContentLoaded', function() {

  ReactDOM.render(
    <App/>, document.querySelector('#app'));
});
