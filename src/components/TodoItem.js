import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  getStyle = () => {
    return {
      textDecoration: this.props.todo.completed ? "line-through" : "none",
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted"
    };
  };

  toggleCheckbox = e => {
    console.log(this.props);
  };

  render() {
    const { id, title, completed } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.toggleCheckbox.bind(this, id)}
            defaultChecked={completed}
          />{" "}
          {title}
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>
            x
          </button>
        </p>
      </div>
    );
  }
}

// PropTypes (good practice)
TodoItem.propTypes = {
  toggleCheckbox: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
  todo: PropTypes.object.isRequired
};

const btnStyle = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "5px 9px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right"
};

export default TodoItem;
