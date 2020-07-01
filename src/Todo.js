import React from "react";
import {
	Link,
} from "react-router-dom";
//todo, index, completeTodo, removeTodo
function Todo(props){

	return (
		<div
		className="todo"
		style={{ textDecoration: props.todo.isCompleted ? "line-through" : "" }}
		>
			<Link to={`/homework/${props.index}`} >
				{props.todo.text}
			</Link>

			<div>
				<button className="btn btn-sm btn-outline-success" onClick={() => props.completeTodo(props.index)}>Complete</button>
				<button className="btn btn-sm btn-outline-danger ml-1" onClick={() => props.removeTodo(props.index)}>x</button>
			</div>
		</div>
	);
}

  export default Todo;