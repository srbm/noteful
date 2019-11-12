import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NotesContext from '../NotesContext';

class Note extends Component {
  render() {
    return (
      <NotesContext.Consumer>
      <li className="note" >
        <Link to={'/note/' + this.props.id}><h2>{this.props.name}</h2></Link>
        <p>{this.props.date}</p>
        <button type="button">Delete Note</button>
      </li>
      </NotesContext.Consumer>
    )
  }
}

export default Note;