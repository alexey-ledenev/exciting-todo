import React from 'react';

export default class NewTaskForm extends React.Component {
  constructor() {
    super();
    this.onNewTaskChange = (e) => {
      this.setState({
        taskLabel: e.target.value
      });
    };
    this.onFormSubmit = (e) => {
      e.preventDefault();
      this.props.onTaskAdd(this.state.taskLabel);
      this.setState({
        taskLabel: ''
      });
    };
  };
  state = {
    taskLabel: ''
  };
  render() {
    return (
      <form className="new-task-form" onSubmit={ this.onFormSubmit }>
        <div className="columns">
          <div className="column">
            <input 
              className="input" 
              type="text" 
              placeholder="New task ..." 
              onChange={this.onNewTaskChange} 
              value={this.state.taskLabel}  
            />
          </div>
          <div className="column is-narrow">
            <button className="button is-black is-outlined"><i className="fas fa-plus"></i></button>
          </div>
        </div>
      </form>
    )
  }
}