import React, { useState,useEffect } from "react";
import "./App.css";
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
	function printString(string)
	{
		//console.log(string);
		return string;
	}
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [todos, setTodos] = useState([]);
	//{"title":"homework 1","text":"efwf"},{text:"homework 2"},{text:"homework 3"}
	
    useEffect(() => {
    fetch("https://my-json-server.typicode.com/typicode/demo/posts")
      .then(res => res.json())
	  //.then(data => console.log(data))
      .then(
        (result) => {
          setIsLoaded(true);
		  console.log(result);
		  
          setTodos(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, []);
	
	  //
	  //
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