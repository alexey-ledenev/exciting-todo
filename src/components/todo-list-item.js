import React from 'react';
import '../styles/todo-list-item.css'

export default class TodoListItem extends React.Component {
  render() {
    const { taskLabel, done, hot, onTaskDelete, onToggleDone, onToggleHot } = this.props;
    let labelClassNames = 'todo-list-item__label';
    let hotBtnClassNames = 'button is-warning';
    if (hot) {
      labelClassNames += ' hot';
    } else {
      hotBtnClassNames += ' is-outlined'
    }
    if (done) labelClassNames += ' done';
  
    return (
      <div className="todo-list-item">
        <span className={labelClassNames} onClick={onToggleDone}>
          { taskLabel }
        </span>
        <span className="buttons">
          <button className="button is-danger is-outlined" onClick={onTaskDelete}><i className="fas fa-trash"></i></button>
          <button className={hotBtnClassNames} onClick={onToggleHot}><i className="fas fa-star"></i></button>
        </span> 
      </div>
    )
  }
}