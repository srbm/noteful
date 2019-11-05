import React, { Component } from 'react';
import './noteMain.scss';
import NotesContext from '../NotesContext';

class NoteMain extends Component {
  static contextType = NotesContext;
  render() {
    const { notes } = this.context;
    let note = notes.filter(n => n.id === this.props.match.params.note);
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