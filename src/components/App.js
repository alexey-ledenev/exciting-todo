import React from 'react';
import AppHeader from './app-header'
import AppFooter from './app-footer'
import TodoList from './todo-list'
import SearchPanel from './search-panel'

import '../styles/app.css'

export default class App extends React.Component {
  constructor() {
    super();
    this.deleteTask = (id) => {
      this.setState(( {tasks} ) => {
        const newTasks = tasks.filter((el) => el.id !== id);
        return {
          tasks: newTasks
        }
      });
    }
  }
  state = {
    tasks: [
      { taskLabel: 'Learn React', hot: false, id: 1},
      { taskLabel: 'Drink coffee', hot: false, id: 2},
      { taskLabel: 'Create todo-list using React', hot: true, id: 3}
    ]
  }
  render() {
    return (
      <div className="container app">
        <AppHeader/>
        <div className="main">
          <SearchPanel/>
          <TodoList 
            tasks={this.state.tasks}
            onTaskDelete={ this.deleteTask }
          />
        </div>
        <AppFooter/>
      </div>
    )
  }
};