import React from 'react';
import TodoListItem from './todo-list-item'
import '../styles/todo-list.css'

const TodoList = ({ tasks }) => {
  const t = tasks.map((itm) => {
    const {id, ...itmAttrs} = itm;
    return (
      <li className="panel-block" key={id}>
        <TodoListItem { ...itmAttrs } />
        <span className="buttons">
          <button className="button is-danger is-outlined"><i className="fas fa-trash"></i></button>
          <button className="button is-success is-outlined"><i className="fas fa-check-double"></i></button>
        </span> 
      </li>
    )
  });
  return (
  <ul className="panel todo-list">
    { t }
  </ul>
  );
};

export default TodoList;