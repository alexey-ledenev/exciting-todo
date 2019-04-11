import React from 'react';
import TodoListItem from './todo-list-item'
import '../styles/todo-list.css'

const TodoList = ({ tasks, onTaskDelete }) => {
  const taskItems = tasks.map((itm) => {
    const {id, ...itmAttrs} = itm;
    return (
      <li className="panel-block" key={id}>
        <TodoListItem 
        { ...itmAttrs }
         onTaskDelete={ () => onTaskDelete(id) }/>
      </li>
    )
  });
  return (
  <ul className="panel todo-list">
    { taskItems }
  </ul>
  );
};

export default TodoList;