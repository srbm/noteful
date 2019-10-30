import React, { Component } from 'react';
import './App.css';
import data from './dummy-store.js';
import { Route } from 'react-router-dom';

import Header from './Header/header';
import Sidebar from './Sidebar/sidebar';
import Main from './Main/main';
import NoteSidebar from './NoteSidebar/noteSidebar';
import FolderSidebar from './FolderSidebar/folderSidebar';
import FolderMain from './FolderMain/folderMain';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data
    }
  }
  render() {
    return (
      <>
        <Header />
        <div className="container">
          <Route
            exact
            path='/'
            render={(routerProps) => {
              return <Sidebar data={this.state.data}
            /> }
            } 
          />
          <Route
            path='/folder/:folderid'
            render={(routerProps) => {
              return <Sidebar
                folderid={routerProps.match.params.folderid}
                data={this.state.data}
              /> }
            }
          />
          <Route
            path='/note/:note'
            render={(routerProps) => {
              console.log(routerProps);
              return <NoteSidebar
                note={routerProps.match.params.note}
                data={this.state.data}
              /> }
            }
          />

          <Route
            exact
            path='/'
            render={() => 
              <Main data={this.state.data} /> } 
          />
          <Route path='/folder/:folderid'
            render={(routerProps) => {
              console.log(routerProps);
              return <Main
                data={this.state.data}
                folderId={routerProps.match.params.folderid}
              /> }
            }
          />

        </div>
      </>
    );
  }
}

export default App;
