import React, { Component } from 'react';
import './main.scss';

class Main extends Component {
  render() {
    console.log(this.props);
    let notes = this.props.data.notes;
    if (this.props.folderId ) {
      notes = notes.filter(n => n.folderId === this.props.folderId)
    }
    console.log(notes);
    notes = notes.map((note, i) => {
      return <li 
        className="note" 
        key={i}
        folderid={note.folderId}>
        <h2>{note.name}</h2>
        <p>{note.modified}</p>
        <button type="button">Delete Note</button>
      </li>
    })
    console.log(notes);
    return (
      <main className="main">
        <ul>{notes}</ul>
        <button type="button">Add Note</button>
      </main>
    )
  }
}

export default Main;