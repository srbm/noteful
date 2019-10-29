import React, { Component } from 'react';
import './folderSidebar.scss';
import { NavLink } from 'react-router-dom';

class FolderSidebar extends Component {
  render() {
    const folders = this.props.data.folders.map((folder, i) => {
      return <li className="sidebar__folder" key={i}>
        <NavLink to={'/folder/' + folder.name} >{folder.name}</NavLink>
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

export default FolderSidebar;