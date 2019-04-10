import React from 'react';

export default class ItemsStatusFilter extends React.Component {
  render() {
    return (
      <div className="buttons has-addons">
        <span className="button is-link is-selected">All</span>
        <span className="button is-danger">Active</span>
        <span className="button is-success">Done</span>
      </div>
    )
  }
}