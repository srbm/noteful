import React, { Component } from 'react';
import NoteContext from '../NotesContext';
import './main.scss';
import Note from '../Note/note';

class Main extends Component {
  static contextType = NoteContext;
  render() {
    let { notes } = this.context;
    if (this.props.match.params.folderid ) {
      notes = notes.filter(n => n.folderId === this.props.match.params.folderid)
    }
    notes = notes.map((note, i) => {
      return <Note
        key={i}
        folderId={note.folderId}
        id={note.id}
        name={note.name}
        date={note.modified}
        deleteNote={this.context.deleteNote}
        />
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