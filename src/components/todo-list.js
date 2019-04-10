import React from 'react';
import TodoListItem from './todo-list-item'
import '../styles/todo-list.css'

const TodoList = ({ tasks }) => {
  const t = tasks.map((itm) => {
    const {id, ...itmAttrs} = itm;
    return (
      <li className="panel-block" key={id}>
        <TodoListItem { ...itmAttrs } />
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