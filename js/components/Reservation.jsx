import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';


class ReservationToBeMade extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      time: '',
      peopleNumber: '',
      startDate: moment(),
      errorMessage: 'please complete all the fields before sending the form ',
      errorMessageEmail: 'email address must contain @',
      errorMessageDisplay:  'none',
      errorMessageEmailDisplay: 'none'
    }
  }

  handleOnChangeEmail = event => {
    this.setState({
      email: event.target.value
    });
  }

  handleOnChangeTime = event => {
    this.setState({
      time: event.target.value
    });
  }

  handleOnChangeDate = date => {
    this.setState({
      startDate: date
    });
  }

  handleOnChangePeopleNumber = event => {
    this.setState({
      peopleNumber: event.target.value
    });
  }

  isEmptyString(string) {
      return (!string || 0 === string.length);
  }

  handleOnClick = event =>{
    event.preventDefault();
    if(this.isEmptyString(this.state.email) || this.isEmptyString(this.state.time) || this.isEmptyString(this.state.peopleNumber)) {
      this.setState({
        email: '',
        time: '',
        peopleNumber: '',
        errorMessageDisplay: 'block'
      });
    } else if(this.state.email.indexOf('@') === -1) {
      this.setState({
        email: '',
        time: '',
        peopleNumber: '',
        errorMessageEmailDisplay: 'block'
      });
    } else {
        this.props.onSubmitReservation();
    }
  }

  render() {
    return <section id='reservation' className='reservation'>
      <div className='container '>
        <div className='row'>
          <div className='reservation-container'>
            <h2><span>BOOK </span> A TABLE</h2>
            <p style={{ display: this.state.errorMessageDisplay }}>{ this.state.errorMessage }</p>
            <p style={{ display: this.state.errorMessageEmailDisplay }}>{ this.state.errorMessageEmail }</p>
            <form className='reservation-form'>
              <div className='reservation-details'>
                <div className='form-label'>
                  <label>Email</label>
                </div>
                <div className='form-input'>
                  <input type='text' value={ this.state.email } onChange={ this.handleOnChangeEmail }></input>
                </div>
              </div>
              <div className='reservation-details'>
                <div className='form-label'>
                  <label>Time</label>
                </div>
                <div className='form-input'>
                  <input type='time' value={ this.state.time } onChange={ this.handleOnChangeTime }></input>
                </div>
              </div>
              <div className='reservation-details'>
                <div className='form-label'>
                  <label>Date</label>
                </div>
                <div className='form-input'>
                  <div className='form-input_date'>
                    <DatePicker selected={ this.state.startDate } onChange={ this.handleOnChangeDate } />
                  </div>
                </div>
              </div>
              <div className='reservation-details'>
                <div className='form-label'>
                  <label>No. of people</label>
                </div>
                <div className='form-input'>
                  <input type='text' value={ this.state.peopleNumber } onChange={ this.handleOnChangePeopleNumber }></input>
                </div>
              </div>
              <div className='form-button'>
                <button className='reservation_button-send' onClick={ this.handleOnClick }>BOOK</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  }
}

class ReservationMade extends React.Component {

  render() {
    return <section id='reservation' className='reservation'>
      <div className='container '>
        <div className='row'>
          <div className='reservation-container'>
            <div className='reservation-made'>
              <h2><span>Thank you </span> for making a reservation at our <span> restaurant </span></h2>
              <p>Our team will contact you via email to confirm the details</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  }
}

class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formCompleted: false,
    }
  }

  onSubmitReservation = () => {
    this.setState({
      formCompleted: true,
    });
  }

  render() {
    if(this.state.formCompleted) {
      return <ReservationMade />
    } else {
      return <ReservationToBeMade onSubmitReservation={ this.onSubmitReservation } />
    }
  }
}

module.exports = Reservation;
