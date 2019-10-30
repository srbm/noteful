import React, { Component } from 'react';
import './App.css';
import data from './dummy-store.js';
import { Route } from 'react-router-dom';

import Header from './Header/header';
import Sidebar from './Sidebar/sidebar';
import Main from './Main/main';
import MainSidebar from './MainSidebar/mainSidebar';
import FolderSidebar from './FolderSidebar/folderSidebar';
import MainMain from './MainMain/mainMain';
import FolderMain from './FolderMain/folderMain';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data
    }
  }
  render() {
    console.log(this.state);
    return (
      <>
        <Header />
        <div className="container">
          <Route
            exact
            path='/'
            render={(routerProps) => {
              return <Sidebar id={this.state.data.folders.id} data={this.state.data}
            /> }
            } 
          />
          <Route
            path='/folder/:folderid'
            render={(routerProps) => {
            return <Sidebar id={this.state.data.folders.id} data={this.state.data}
              />}
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
                folderId={routerProps.match.params.folderid} /> }
            } />

        </div>
      </>
    );
  }
}

export default App;
