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
          <Sidebar data={this.state.data}>
            <Route
              exact
              path='/'
              component={MainSidebar}
              render={(routerProps) => {
              console.log(routerProps)
              return <Sidebar data={this.state.data}
              /> }
              } 
            />
            <Route
              path='/folder/:folderid'
              render={(routerProps) => {
              console.log(routerProps)
              return <FolderSidebar id={this.state.data.folders.id}
                />}
              }
            />
          </Sidebar>
          <Main data={this.state.data}>
            <Route path='/' component={MainMain} />
            <Route path='/folder/:folderid' component={FolderMain} />
          </Main>
        </div>
      </>
    );
  }
}

export default App;
