import React from 'react';
import ItemsStatusFilter from './items-status-filter'

export default class SearchPanel extends React.Component {
  constructor() {
    super();
    this.onSearchChange = (e) => {
      this.props.onSearch(e.target.value)
    };
  };
  render() {
    return (
      <div className="columns">
        <div className="column">
          <input className="input" type="text" placeholder="Search..." onChange={this.onSearchChange} />
        </div>
        <div className="column is-narrow has-text-right">
          <ItemsStatusFilter onFiltered={ this.props.onFiltered } activeFilter={this.props.activeFilter} />
        </div>
      </div>  
    )
  };
}