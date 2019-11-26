import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Note extends Component {
  
  render() {
    return (
      <li className="note">
        <Link to={'/note/' + this.props.id}><h2>{this.props.name}</h2></Link>
        <p>{this.props.date}</p>
        <button onClick={() => this.props.deleteNote(this.props.id)} type="button">Delete Note</button>
      </li>
    )
  }
}

export default Note;