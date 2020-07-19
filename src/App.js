import React, { useState } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
} from "react-router-dom";
import Homework from "./Homework";
import Todo from "./Todo";
import TodoForm from "./TodoForm";


function App() {
	const [todos, setTodos] = useState([]);

	const addTodo = text => {
		const newTodos = [...todos, { text }];
		setTodos(newTodos);
	};
	
	const completeTodo = index => {
		const newTodos = [...todos];
		newTodos[index].isCompleted = true;
		setTodos(newTodos);
	};

	const removeTodo = index => {
		const newTodos = [...todos];
		newTodos.splice(index, 1);
		setTodos(newTodos);
	};

  return (
		<Router>
    <div className="app">
			<nav className="nav">
				<ul>
				<li className="btn btn-link">
					<Link to="/">Home</Link>
				</li>
				<li className="btn btn-link">
					<Link to="/about">About</Link>
				</li>
				<li className="btn btn-link">
					<Link to="/users">Users</Link>
				</li>
				</ul>
			</nav>
			{/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
			<Route path="/homework/:hwid">
				<Homework />
			</Route>
			<Route path="/homework">
				missing homework id
				
				
				
			
				
				
				
				
				
			</Route>
			<Route path="/about">
				{/* <About /> */}
			</Route>
			<Route path="/users">
				{/* <Users /> */}
			</Route>
			<Route path="/">
			<div className="todo-list">
				{todos.map((todo, index) => (
					<Todo
						key={index}
						index={index}
						todo={todo}
						completeTodo={completeTodo}
						removeTodo={removeTodo}
					/>
				))}
				<TodoForm addTodo={addTodo} />

			</div>
			</Route>
        </Switch>
		
    </div>
	</Router>
      
  );
}



export default App;