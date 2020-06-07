import React, { Component } from 'react';
import { full_date } from '../util/DateFormat';

class Contact extends Component {

  render() {
    const contact = this.props.data

    return (
      <article className="contact" data-testid="contact">
        <span className="contact__avatar"><img src={contact.avatar} alt="avatar" /></span>
        <span className="contact__data" data-testid="contact-name">{contact.name}</span>
        <span className="contact__data" data-testid="contact-phone">{contact.phone}</span>
        <span className="contact__data" data-testid="contact-country">{contact.country}</span>
        <span className="contact__data" data-testid="contact-date">{full_date(contact.admissionDate)}</span>
        <span className="contact__data" data-testid="contact-company">{contact.company}</span>
        <span className="contact__data" data-testid="contact-department">{contact.department}</span>
      </article>
    );

  }
}

export default Contact;