import React, { Component } from 'react';
import './main.scss';

class Main extends Component {
  render() {
    const notes = this.props.data.notes.map((note, i) => {
      return <li 
        className="note" 
        key={i}
        folderid={note.folderId}>
        <h2>{note.name}</h2>
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