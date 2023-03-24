
import { useState, useEffect } from 'react';
import './App.css';
import Header from './Header'
import { uuid } from 'uuidv4';
import AddContact from './AddContact'
import ContactList from './ContactList'

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const retrivedContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrivedContacts) {
      setContacts(retrivedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    return (() => {
      localStorage.removeItem(LOCAL_STORAGE_KEY);
    })
  }, [contacts]);

  function handleAddContact(contact) {
    setContacts((prevContact) => [...prevContact, { ...contact, id: uuid() }]);
  }

  return (
    <div>
      <Header />
      <div className='ui container'>
        <AddContact handleAddContact={handleAddContact} />
        <ContactList contacts={contacts} />
      </div>
    </div>
  );
}

export default App;
