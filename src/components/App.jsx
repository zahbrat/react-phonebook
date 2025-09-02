import { Component } from "react";
import { nanoid } from "nanoid";

import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import Filter from "./Filter";

export default class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    name: "",
    number: "",
    filter: "",
  };

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = (e) => {
    e.preventDefault();

    const { name, number, contacts } = this.state;
    const isNameInContacts = contacts.some(
      (contact) => contact.name.toUpperCase() === name.toUpperCase()
    );

    if (isNameInContacts) {
      alert(`${name} is already in contacts`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
      name: "",
      number: "",
    }));
  };

  deleteContact = (e) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== e.target.dataset.id
      ),
    }));
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toUpperCase();

    return contacts.filter((contact) =>
      contact.name.toUpperCase().includes(normalizedFilter)
    );
  };

  render = () => {
    const filteredContacts = this.getFilteredContacts();
    
   return (
     <section className="min-h-screen bg-purple-100 p-8 flex flex-col items-center justify-center select-none">
       <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-5xl space-y-8">
         <h1 className="text-4xl font-extrabold text-purple-900 text-center">
           Phonebook
         </h1>

         <div className="flex w-full gap-10">
           <div className="space-y-8 flex-1">
             <ContactForm
               handleSubmit={this.handleSubmit}
               handleChange={this.handleChange}
               name={this.state.name}
               number={this.state.number}
             />
             <Filter
               filter={this.state.filter}
               handleChange={this.handleChange}
             />
           </div>

           <div className="space-y-4 flex-1">
             <h2 className="text-3xl font-extrabold text-purple-900 text-center">
               Contacts
             </h2>
             <ContactList
               filter={this.state.filter}
               contacts={filteredContacts}
               deleteContact={this.deleteContact}
             />
           </div>
         </div>
       </div>
     </section>
   );
  };
}
