import React from "react";
import {
	BrowserRouter as Router,
	Link,
} from "react-router-dom";

function Todo({ todo, index, completeTodo, removeTodo }) {
    return (
    <Router>
      <div
        className="todo"
        style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      >
        <Link to={`/homework/${index}/`} attr="view" className="btn btn-sm btn-link">
            {todo.text}
        </Link>
  
        <div>
          <button className="btn btn-sm btn-outline-success" onClick={() => completeTodo(index)}>Complete</button>
          <button className="btn btn-sm btn-outline-danger ml-1" onClick={() => removeTodo(index)}>x</button>
        </div>
      </div>
      </Router>
    );
  }

  export default Todo;