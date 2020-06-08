import React, { useState } from "react";
import "./App.css";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useRouteMatch,
	useParams
} from "react-router-dom";
function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
  <Router>
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      <Link 
	  to={`/Homework/${index}/`}
	  >{todo.text}</Link>

      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => removeTodo(index)}>x</button>
      </div>
    </div>
	</Router>
  );
}

function TodoForm({ addTodo }) {
	const [value, setValue] = useState("");

	const handleSubmit = e => {
		e.preventDefault();
		if (!value) return;
		addTodo(value);
		setValue("");
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				className="input"
				value={value}
				onChange={e => setValue(e.target.value)}
			/>
		</form>
  );
}

function App() {
	const [todos, setTodos] = useState([
	{
		text: "Learn about React",
		isCompleted: false
	},
	{
		text: "Meet friend for lunch",
		isCompleted: false
	},
	{
		text: "Build really cool todo app",
		isCompleted: false
	}
  ]);

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
  
  
  
    <div className="app">
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
	  
	  
	  <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
			<Route path="/Homework/:hwid">
				<Homework />
			</Route>
			<Route path="/Homework">
			nothing to see here
			</Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}




function Homework() {
	//let hw = useRouteMatch();

	let {hwid} = useParams();
  return <h3>{hwid}</h3>;
}
export default App;