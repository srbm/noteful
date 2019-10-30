import React, { Component } from 'react';
import './noteMain.scss';
import { Link } from 'react-router-dom';

class NoteMain extends Component {
  render() {
    let note = this.props.data.notes.filter(n => n.id === this.props.note);
    note = note[0];
    console.log(note);
    return (
      <main className="main">
        <div>
          <div 
            className="note" 
            folderid={note.folderId}>
            <h2>{note.name}</h2>
            <p>{note.modified}</p>
            <button type="button">Delete Note</button>
          </div>
          <p>{note.content}</p>
        </div>
      </main>
    )
  }
}

export default NoteMain;