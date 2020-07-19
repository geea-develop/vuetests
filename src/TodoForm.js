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
