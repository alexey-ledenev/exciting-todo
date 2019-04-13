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
  }
  state = {
    tasks: [
      this.createTask('Learn React'),
      this.createTask('Drink coffee'),
      this.createTask('Create todo-list using React'),
    ]
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
    const {tasks} = this.state;
    const doneTasksCount = tasks.filter((t) => t.done).length;
    const todoTasksCount = tasks.length - doneTasksCount;
    return (
      <div className="container app">
        <AppHeader todo={todoTasksCount} done={doneTasksCount} />
        <div className="main">
          <SearchPanel/>
          <TodoList 
            tasks={tasks}
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