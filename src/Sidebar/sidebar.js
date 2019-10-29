import React, { Component } from 'react';
import './sidebar.scss';
import { Link } from 'react-router-dom';

class Sidebar extends Component {
  render() {
    const folders = this.props.data.folders.map((folder, i) => {
      return <li className="sidebar__folder" key={i}>
        <Link to={'/folder/' + folder.name} >{folder.name}</Link>
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