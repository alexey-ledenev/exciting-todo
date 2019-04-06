import React from 'react';
import ItemsStatusFilter from './items-status-filter'

const SearchPanel = () => (
  <div className="columns">
    <div className="column">
      <input className="input" type="text" placeholder="Search..." />
    </div>
    <div className="column is-narrow has-text-right">
      <ItemsStatusFilter />
    </div>
  </div>  
);

export default SearchPanel;