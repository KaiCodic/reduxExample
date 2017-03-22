import React from 'react';

class TodoApp0 extends React.Component {
  constructor(props) {
    super(props);
    //this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {items: []};
  }

  render() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="todo"/>
          <button>{'Add #' + (this.state.items.length + 1)}</button>
        </form>
      </div>
    );
  }

  /*handleChange(e) {
    e.preventDefault();
    this.setState({text: e.target.value});
  }*/

  handleSubmit(e) {
    e.preventDefault();
    var newItem = {
      text: this.refs.todo.value,
      id: Date.now()
    };
    this.setState((prevState) => ({
      items: prevState.items.concat(newItem),

    }));
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}

export default TodoApp0;
