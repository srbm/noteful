import React, { Component } from 'react';
import './noteSidebar.scss';
import { Link } from 'react-router-dom';

class NoteSidebar extends Component {
  render() {
    const note = this.props.data.notes.filter(n => n.id === this.props.note);
    const folderId = note[0].folderId;
    const folder = this.props.data.folders.filter(f => folderId === f.id);
    console.log(folder);
    return (
      <ul className="sidebar">
        <Link className="back-button" to={'/folder/' + folderId}>Go Back</Link>
        <div className="folder-name">Folder: {folder[0].name}</div>
      </ul>
    )
  }
}

export default NoteSidebar;