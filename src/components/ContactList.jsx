import { Component } from "react";
import ContactEl from "./ContactEl";

export default class ContactList extends Component {
  render = () => (
    <ul className="space-y-4 w-full">
      {this.props.contacts.map((el) => (
        <ContactEl
          key={el.id}
          id={el.id}
          name={el.name}
          number={el.number}
          deleteContact={this.props.deleteContact}
        />
      ))}
    </ul>
  );
}
