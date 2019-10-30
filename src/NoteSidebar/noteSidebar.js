import React, { Component } from 'react';
import './noteSidebar.scss';
import { Link } from 'react-router-dom';

class NoteSidebar extends Component {
  render() {
    // console.log(this.props);
    const note = this.props.data.notes.filter(n => n.id === this.props.note);
    console.log(note);
    const folderId = note[0].folderId;
    console.log(folderId);
    const folderName = this.props.data.folders.filter(f => folderId === f.id);
    console.log(folderName);
    return (
      <ul className="sidebar">
        <Link to={'/folder/' + folderId}>Go Back</Link>
        <div>{folderName[0].name}</div>
      </ul>
    )
  }
}

export default NoteSidebar;