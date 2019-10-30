import React, { Component } from 'react';
import './main.scss';
import { Link } from 'react-router-dom';

class Main extends Component {
  render() {
    console.log(this.props);
    let notes = this.props.data.notes;
    if (this.props.folderId ) {
      notes = notes.filter(n => n.folderId === this.props.folderId)
    }
    notes = notes.map((note, i) => {
      return <li 
        className="note" 
        key={i}
        folderid={note.folderId}>
        <Link to={'/note/' + note.id}><h2>{note.name}</h2></Link>
        <p>{note.modified}</p>
        <button type="button">Delete Note</button>
      </li>
    })
    return (
      <main className="main">
        <ul>{notes}</ul>
        <button type="button">Add Note</button>
      </main>
    )
  }
}

export default Main;