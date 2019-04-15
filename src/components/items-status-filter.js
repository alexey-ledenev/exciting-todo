import React from 'react';

export default class ItemsStatusFilter extends React.Component {
  buttonsData = [
    {name: 'all', label: 'All'},
    {name: 'active', label: 'Active'},
    {name: 'done', label: 'Done'}
  ];
  render() {
    const buttons = this.buttonsData.map(({name, label}) => {
      const btnClassList = name === this.props.activeFilter ? "button is-link" : "button";
      return (
        <button 
          className={btnClassList} 
          key={name}
          onClick={ () => this.props.onFiltered(name) }
        >
          {label}
        </button>
      )
    });
    return (
      <div className="buttons has-addons">
        {buttons}
      </div>
    )
  }
}