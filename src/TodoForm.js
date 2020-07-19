import React, { useState } from "react";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function TodoForm({ addTodo }) {
	const [value, setValue] = useState("");

	const handleSubmit = e => {
		e.preventDefault();
		if (!value) return;
		addTodo(value);
		setValue("");
	};

	return (
		
	<Form onSubmit={handleSubmit} className="form">


		<Form.Group controlId="formBasicInput">
			<Form.Control
			type="text" 
			placeholder="homework" 
				aria-label="addForm"
			value={value}
			onChange={e => setValue(e.target.value)}
			/>
		</Form.Group>

	</Form>
  );
}

export default TodoForm;
/*
<form onSubmit={handleSubmit} className="form">
			<Button
				type="text"
				aria-label="addForm"
				as="input"
				variant="outline-primary"
				placeholder="Add homework here..."
				value={value}
				onChange={e => setValue(e.target.value)}
			/>
		</form>*/