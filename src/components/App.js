import React from 'react';
import AppHeader from './app-header'
import AppFooter from './app-footer'
import TodoList from './todo-list'
import SearchPanel from './search-panel'
import NewTaskForm from './new-task-form'

import '../styles/app.css'

export default class App extends React.Component {
  mId = 100;
  constructor() {
    super();
    this.toggleProperty = (id, arr, prop) => {
      return arr.map((item) => {
        return item.id === id ? {...item, [prop]: !item[prop]} : item
      });
    };
    this.deleteTask = (id) => {
      this.setState(( {tasks} ) => {
        const newTasks = tasks.filter((el) => el.id !== id);
        return {
          tasks: newTasks
        }
      });
    };
    this.newTask = (taskLabel) => {
      this.setState(( {tasks} ) => {
        const newTasks = [...tasks, this.createTask(taskLabel)];
        return {
          tasks: newTasks
        }
      });
    };
    this.toggleDone = (id) => {
      this.setState(( {tasks} ) => {
        return {
          tasks: this.toggleProperty(id, tasks, 'done')
        }
      });
    };
    this.toggleHot = (id) => {
      this.setState(( {tasks} ) => {
        return {
          tasks: this.toggleProperty(id, tasks, 'hot')
        }
      });
    };
    this.onSearch = (searchLine) => {
      this.setState({ searchLine });
    };
    this.search = (searchLine, arr) => {
      return arr.filter((el) => el.taskLabel.toLowerCase().indexOf(searchLine.toLowerCase()) > -1)
    };
    this.filter = (filterParam, arr) => {
      switch(filterParam) {
        case 'all':
          return arr;
        case 'active':
          return arr.filter((itm) => !itm.done);
        case 'done':
          return arr.filter((itm) => itm.done);
        default:
          return arr;
      }
    };
    this.onFiltered = (filterParam) => {
      this.setState({ filterParam });
    };
  }
  state = {
    tasks: [
      this.createTask('Learn React'),
      this.createTask('Drink coffee'),
      this.createTask('Create todo-list using React'),
    ],
    searchLine: '',
    filterParam: 'active'
  };
  createTask(taskLabel) {
    return {
      taskLabel,
      done: false,
      hot: false,
      id: this.mId++
    }
  };
  render() {
    const {tasks, searchLine, filterParam} = this.state;
    const filteredTasks = this.filter(filterParam, (searchLine.length > 0 ? this.search(searchLine, tasks) : tasks));
    const doneTasksCount = tasks.filter((t) => t.done).length;
    const todoTasksCount = tasks.length - doneTasksCount;
    return (
      <div className="container app">
        <AppHeader todo={todoTasksCount} done={doneTasksCount} />
        <div className="main">
          <SearchPanel 
            onSearch={ this.onSearch } 
            onFiltered={ this.onFiltered } 
            activeFilter={filterParam}
          />
          <TodoList 
            tasks={ filteredTasks }
            onTaskDelete={ this.deleteTask }
            onToggleDone={ this.toggleDone }
            onToggleHot={ this.toggleHot }
          />
          <NewTaskForm onTaskAdd={ this.newTask } />
        </div>
        <AppFooter/>
      </div>
    )
  }
};