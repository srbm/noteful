import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import NotesContext from './NotesContext';
import Header from './Header/header';
import Sidebar from './Sidebar/sidebar';
import Main from './Main/main';
import NoteSidebar from './NoteSidebar/noteSidebar';
import NoteMain from './NoteMain/noteMain';
import AddFolder from './AddFolder/AddFolder';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: [],
      folders: []
    }
  }
  deleteNote = noteId => {
    fetch(`http://localhost:9090/notes/${noteId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      },
    })
    .then(res => {
      if(!res.ok) {
        throw new Error(res.status);
      }
      return res.json();
    })
    .then(() => {
      const newNotes = this.state.notes.filter(n => n.id !== noteId);
      console.log(newNotes, noteId);
      this.setState({
        notes: newNotes,
      });
    })
    .catch(err => console.log(err))
  }

  addFolder = folder => {
    this.setState({
      folders: [...this.state.folders, folder]
    })
  }

  componentDidMount() {
    fetch('http://localhost:9090/folders', {
      method: 'GET',
    })
      .then(res => {
        if(!res.ok) {
          throw new Error(res.status)
        }
        return res.json();
      })
      .then(folders => this.setState({folders}))
      .catch(err => console.log(err));

      fetch('http://localhost:9090/notes', {
        method: 'GET',
      })
      .then(res => {
        if(!res.ok) {
          throw new Error(res.status)
        }
        return res.json();
      })
      .then(notes => this.setState({notes}))
      .catch(err => console.log(err));
  }


  render() {
    const contextValue = {
      notes: this.state.notes,
      folders: this.state.folders,
      deleteNote: this.deleteNote,
      addFolder: this.addFolder,
      addNote: this.addNote,
    }
    return (
      <>
        <Header />
        <NotesContext.Provider value={contextValue}>
          <div className="container">
            <Route
              exact
              path='/'
              component={Sidebar} 
            />
            <Route
              path='/folder/:folderid'
              component={Sidebar}
            />
            <Route
              path='/note/:note'
              component={NoteSidebar}
            />
            <Route
              path='/add-folder'
              component={AddFolder}
            />

            <Route
              exact
              path='/'
              component={Main}

            />
            <Route path='/folder/:folderid'
              component={Main}
            />
            <Route
              path='/note/:note'
              component={NoteMain}
            />

          </div>
        </NotesContext.Provider>
      </>
    );
  }
}

export default App;
