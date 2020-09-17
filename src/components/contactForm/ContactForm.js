import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Styles from './ContactFormStyles.module.css';
import ExsistNameAlert from '../alert/ExsistNameAlert'

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
    alert:false
  };
  handleChangeName = event => {
    this.setState({ name: event.target.value });
  };
  handleChangeNumber = event => {
    this.setState({ number: event.target.value });
  };
  handleFormSubmit = event => {
    event.preventDefault();
    const contacts = this.props.contacts;
    // console.log('props',this.props);
    const { name } = this.state;
    if (contacts.find(el => el.name.toLowerCase() === name.toLowerCase())) {
      this.setState({ alert: true });
      setTimeout(() => this.setState({ alert: false }), 1500);
      // alert(`"${name}" is alredy in contacts `);
    } else {
      this.props.addUserContact(this.state.name, this.state.number);
    }
    this.setState({ name: '', number: '' });
  };
  render() {
    return (
      <>
      <ExsistNameAlert alert={this.state.alert} />
      <form className={Styles.form__style}onSubmit={this.handleFormSubmit}>
        <label>
          <input
          placeholder="Name"
          className={Styles.input__style}
          type="text"
          value={this.state.name}
          onChange={this.handleChangeName}
          ></input>
        </label>
        <label>
          <input
          placeholder="Number"
          className={Styles.input__style}
            type="number"
            value={this.state.number}
            onChange={this.handleChangeNumber}
          ></input>
        </label>
        <button className={Styles.addbtn__style}type="submit" onSubmit={this.handleFormSubmit}>
          Add contact
        </button>
      </form>
      </>
    );
  }
}

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name:PropTypes.string,
      number:PropTypes.string,
      id:PropTypes.string

    })
  ).isRequired,
  addUserContact: PropTypes.func.isRequired,
};


