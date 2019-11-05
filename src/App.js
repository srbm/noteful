import React, { Component } from 'react';
import './App.css';
import data from './dummy-store.js';
import { Route } from 'react-router-dom';
import NotesContext from './NotesContext';
import Header from './Header/header';
import Sidebar from './Sidebar/sidebar';
import Main from './Main/main';
import NoteSidebar from './NoteSidebar/noteSidebar';
import NoteMain from './NoteMain/noteMain';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: data.notes,
      folders: data.folders,
    }
  }
  deleteNote = noteId => {
    const newNotes = this.state.notes.filter(n => n.id !== noteId);
    this.setState({
      notes: newNotes,
    });
  }

  render() {
    const contextValue = {
      notes: this.state.notes,
      folders: this.state.folders,
      deleteNote: this.deleteNote,
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
              render={(routerProps) => {
                return <NoteSidebar
                  note={routerProps.match.params.note}
                  history={routerProps.history}
                  data={this.state}
                /> }
              }
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
