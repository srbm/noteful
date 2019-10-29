import React, { Component } from 'react';
import './mainSidebar.scss';
// import { Link } from 'react-router-dom';

class MainSidebar extends Component {
  render() {
    const folders = this.props.data.folders.map((folder, i) => {
      return <li className="sidebar__folder" key={i}>
        <a href={'/folder/' + folder.name} >{folder.name}</a>
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

export default MainSidebar;