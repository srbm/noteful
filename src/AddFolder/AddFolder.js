import React, { Component } from 'react';
import NoteContext from '../NotesContext';

class AddFolder extends Component {
  static contextType = NoteContext;
  constructor(props) {
    super(props);
    this.state = {
      name: {
        value: "",
        touched: false,
      },
      id: {
        value: "",
      }
    }
  }
  updateName(name) {
    this.setState({
      name: {
        value: name,
        touched: true,
      }
    })
  }
  handleSubmit(event) {
    event.preventDefault();
    const { name } = this.state;
    const data = {
      "name": name.value,
    }
    console.log(JSON.stringify(data));
    fetch(`http://localhost:9090/folders`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({"name": name.value}),
      redirect: 'follow',
    })
    .then(res => {
      if(!res.ok) {
        throw new Error(res.status);
      }
      return res.json();
    })
    .then(json => {
      console.log(json);
      this.context.addFolder(json);
      this.props.history.push(`/folder/${json.id}`);
    })
    .catch(err => console.log(err));
  }
  render() {
    return (
      <form className="folderForm" onSubmit={e => this.handleSubmit(e)}>
        <h2>Add Folder</h2>
        <label>Folder Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={e => this.updateName(e.target.value)}
        />
        <button
          type='submit'
          className="add-button"
          onClick={e => this.handleSubmit(e)}
          >Add Folder</button>
      </form>
    )
  }
}

export default AddFolder;