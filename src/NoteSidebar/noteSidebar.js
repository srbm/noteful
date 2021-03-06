import React, { Component,  } from 'react';
import NoteContext from '../NotesContext';
import './noteSidebar.scss';

class NoteSidebar extends Component {
  static contextType = NoteContext;
  render() {
    const { notes, folders } = this.context;
    console.log(this.props.match.params.note);
    const note = notes.filter(n => n.id === this.props.match.params.note);
    const folderId = note[0].folderId;
    const folder = folders.filter(f => folderId === f.id);
    console.log(folder);
    return (
      <ul className="sidebar">
        <button className="back-button" onClick={this.props.history.goBack}>Go Back</button>
        <div className="folder-name">Folder: {folder[0].name}</div>
      </ul>
    )
  }
}

export default NoteSidebar;