import React from 'react';
import AppHeader from './app-header'
import AppFooter from './app-footer'
import TodoList from './todo-list'
import SearchPanel from './search-panel'

import '../styles/app.css'

const App = () => {
  const tasks = [
    { task: 'Learn React', hot: false, id: 1},
    { task: 'Drink coffee', hot: false, id: 2},
    { task: 'Create todo-list using React', hot: true, id: 3}
  ];
  return (
    <div className="container app">
    <AppHeader/>
    <div className="main">
      <SearchPanel/>
      <TodoList tasks={tasks}/>
    </div>
    <AppFooter/>
  </div>
  );
};

export default App;