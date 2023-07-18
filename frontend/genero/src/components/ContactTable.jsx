import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ContactTable = () => {
  const [contacts, setContacts] = useState([]);

  // Fetch all contacts from the server
  useEffect(() => {
    axios.get('http://localhost:8000/contact')
      .then(response => {
        setContacts(response.data);
      })
      .catch(error => {
        console.error('Error fetching contacts:', error);
      });
  }, []);

  // Delete a contact by its ID
  const deleteContact = (id) => {
    axios.delete(`http://localhost:8000/contact/${id}`)
      .then(response => {
        // Remove the deleted contact from the state
        setContacts(contacts.filter(contact => contact._id !== id));
      })
      .catch(error => {
        console.error('Error deleting contact:', error);
      });
  };

  return (
    <div >
      <h1 className=" text-amber-400 bg-amber-400 font-bold mb-4">Contact Table</h1>
    <div className="container mx-auto p-4">
      
      <table className="w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="p-2 border bg-amber-400 text-white">Nom</th>
            <th className="p-2 border bg-amber-400 text-white">Prénom</th>
            <th className="p-2 border bg-amber-400 text-white">Email</th>
            <th className="p-2 border bg-amber-400 text-white">Téléphone</th>
            <th className="p-2 border bg-amber-400 text-white">Message</th>
            <th className="p-2 border bg-amber-400 text-white">Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(contact => (
            <tr className="hover:bg-gray-50" key={contact._id}>
              <td className="p-2 border">{contact.nom}</td>
              <td className="p-2 border">{contact.prenom}</td>
              <td className="p-2 border">{contact.email}</td>
              <td className="p-2 border">{contact.telephone}</td>
              <td className="p-2 border">{contact.message}</td>
              <td className="p-2 border">
                <button
                  onClick={() => deleteContact(contact._id)}
                  className="px-4 py-2 bg-amber-400 text-white rounded hover:bg-amber-200"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default ContactTable;

