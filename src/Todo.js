import React from "react";
import {
	Link,
} from "react-router-dom";
import Anime from 'react-anime';
import styled from 'styled-components'
//todo, index, completeTodo, removeTodo
const ButtonSc = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
function Todo(props){
	var AnimeProps={
		opacity:[0,1],
		translateX:[-40,0],
		delay:150*props.index
	};
	return (
		<Anime {...AnimeProps}>
			<div className="todo">
				<Link to={`/homework/${props.index}`} style={{textDecoration: props.todo.isCompleted?"line-through":""}}>
					{props.todo.text}
				</Link>
				<div>
					<ButtonSc
						disabled={props.todo.isCompleted}
						onClick={()=>props.completeTodo(props.index)} 
					>
						Complete
					</ButtonSc>
					<ButtonSc primary onClick={()=>props.removeTodo(props.index)}>
						x
					</ButtonSc>
				</div>
			</div>
		</Anime>
	);
}
  export default Todo;