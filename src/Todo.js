import React from "react";
import {
	BrowserRouter as Router,
	Link,
} from "react-router-dom";

  class Todo extends React.Component{
	constructor( todo, index, completeTodo, removeTodo) {
		//super({ todo, index, completeTodo, removeTodo });
		super();
		this.state = {color: "red"};
	}	  
	render() {
    return (
			<div
			className="todo"
			style={{ textDecoration: this.props.todo.isCompleted ? "line-through" : "" }}
			>
	<Link to={`/homework/${this.props.index}`} >
					{this.props.todo.text}
				</Link>

				<div>
					<button className="btn btn-sm btn-outline-success" onClick={() => this.props.completeTodo(this.props.index)}>Complete</button>
					<button className="btn btn-sm btn-outline-danger ml-1" onClick={() => this.props.removeTodo(this.props.index)}>x</button>
				</div>
			</div>
    );
  }
    
  }

  export default Todo;