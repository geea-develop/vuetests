import React from "react";
import {
	Link,
} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Anime from 'react-anime';
//todo, index, completeTodo, removeTodo

function Todo(props){
	var AnimeProps={
		opacity:[0,1],
		translateX:[-40,0],
		delay:150*props.index
	};
	return (
	<Anime {...AnimeProps}>
		<div
		className="todo"
		style={{ textDecoration: props.todo.isCompleted ? "line-through" : "" }}
		>
			<Link to={`/homework/${props.index}`} >
				{ props.todo.text}
			</Link>

			<div>
				<Button variant="success" onClick={() => props.completeTodo(props.index)}>Complete</Button>{' '}
				<Button variant="danger" onClick={() => props.removeTodo(props.index)}>x</Button>
			</div>
		</div>
		</Anime>
	);
}

  export default Todo;