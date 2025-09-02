import { Component } from "react";

export default class ContactEl extends Component {
  render = () => (
    <li className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm">
      <div className="flex-1 mr-4">
        <p className="font-bold text-gray-800">{this.props.name}</p>
        <p className="text-sm text-gray-600">{this.props.number}</p>
      </div>
      <button
        type="button"
        className="cursor-pointer bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 transform hover:scale-105"
        data-id={this.props.id}
        onClick={this.props.deleteContact}
      >
        Delete
      </button>
    </li>
  );
}
