import React from 'react';
import '../styles/todo-list-item.css'

export default class TodoListItem extends React.Component {
  constructor() {
    super();
    this.state = {
      done: false,
      hot: false
    };
    this.onTaskClick = () => {
      this.setState(({done}) => ({
        done: !done
      }));
    };
    this.onHotClick = () => {
      this.setState(({hot}) => ({
        hot: !hot
      }));
    };
  }
  render() {
    const { taskLabel, onTaskDelete } = this.props;
    const { done, hot } = this.state;
    let labelClassNames = 'todo-list-item__label';
    let doneBtnClassNames = 'button is-success';
    if (hot) {
      labelClassNames += ' hot';
    } else {
      doneBtnClassNames += ' is-outlined'
    }
    if (done) labelClassNames += ' done';
  
    return (
      <div className="todo-list-item">
        <span className={labelClassNames} onClick={this.onTaskClick}>
          { taskLabel }
        </span>
        <span className="buttons">
          <button className="button is-danger is-outlined" onClick={onTaskDelete}><i className="fas fa-trash"></i></button>
          <button className={doneBtnClassNames} onClick={this.onHotClick}><i className="fas fa-check"></i></button>
        </span> 
      </div>
    )
  }
}