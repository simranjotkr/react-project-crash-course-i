import React from 'react';
import ContactCard from './ContactCard';

export default function ContactList(props) {
    return (
        <div className='ui celled list' >
            Contact List
            {props.contacts.map(contact => <ContactCard key={contact.id} contact={contact} />)}
        </div>
    )
}