import React from 'react';

const TodoListItem = ({ task, hot=false }) => {
  const style = {
    color: hot ? 'tomato' : '#000'
  };

  return <span style={style}>{ task }</span>
};

export default TodoListItem;