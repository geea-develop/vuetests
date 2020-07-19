import React from "react";
import {
	Link,
} from "react-router-dom";
import Button from 'react-bootstrap/Button';
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
				<Button variant="success" onClick={() => props.completeTodo(props.index)}>Complete</Button>{' '}
				<Button variant="danger" onClick={() => props.removeTodo(props.index)}>x</Button>
			</div>
		</div>
	);
}

  export default Todo;