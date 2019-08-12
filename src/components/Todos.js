import React, { Component } from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

class Todos extends Component {
  render() {
    return this.props.todos.map(todo => (
      <TodoItem
        key={todo.id}
        todo={todo}
        toggleCheckbox={this.props.toggleCheckbox}
        delTodo={this.props.delTodo}
      />
    ));
  }
}

// PropTypes (good practice)
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  toggleCheckbox: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
};

export default Todos;
