import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/pages/About";
import AddTodo from "./components/AddTodo";
import Header from "./components/layout/Header";
import Todos from "./components/Todos";

import "./App.css";
import axios from "axios";

class App extends Component {
  state = {
    todos: []
  };

  // runs exactly after the component mounts
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(res => this.setState({ todos: res.data }));
  }

  // Toggle "completed"
  toggleCheckbox = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  // Delete Todo
  delTodo = id => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => {
        console.log(res);
        this.setState({
          todos: this.state.todos.filter(todo => todo.id !== id)
        });
      });
  };

  // Add Todo
  addTodo = title => {
    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        title,
        completed: false
      })
      .then(res =>
        this.setState({
          todos: [...this.state.todos, res.data]
        })
      );
  };

  render() {
    return (
      <Router>
        {/* All of this is JSX.*/}
        {/* "className" instead of "class" */}
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={() => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  {/* passing todos as a prop */}
                  <Todos
                    todos={this.state.todos}
                    toggleCheckbox={this.toggleCheckbox}
                    delTodo={this.delTodo}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
