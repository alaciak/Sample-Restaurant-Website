import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.jsx';
import AboutUs from './AboutUs.jsx';
import Gallery from './Gallery.jsx';
import Reservation from './Reservation.jsx';
import ContactForm from './ContactForm.jsx';
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
    </div>
  }
}

document.addEventListener('DOMContentLoaded', function() {

  ReactDOM.render(
    <App/>, document.querySelector('#app'));
});
