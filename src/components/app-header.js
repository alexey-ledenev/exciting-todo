import React from 'react';

const AppHeader = ({done, todo}) => {
  return (
    <div className="columns is-vcentered">
      <div className="column">
        <h1 className="title is-1"> Exciting Todo - List </h1>
      </div>
      <div className="column is-narrow is-size-3 has-text-grey is-paddingless">
        {todo} more to do, {done} done
      </div>
    </div>
  )
};

export default AppHeader;