import React, { Component } from 'react';
import './sidebar.scss';
import { NavLink } from 'react-router-dom';
import NoteContext from '../NotesContext';

class Sidebar extends Component {
  static contextType = NoteContext;
  render() {
    const folders = this.context.folders.map((folder, i) => {
      return <li className="sidebar__folder" key={i}>
        <NavLink to={'/folder/' + folder.id} >{folder.name}</NavLink>
      </li>
    })
    return (
      <ul className="sidebar">
        {folders}
        <button className="add-folder-button" type="button">Add Folder</button>
      </ul>
    )
  }
}

export default Sidebar;