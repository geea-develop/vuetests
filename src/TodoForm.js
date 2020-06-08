import React, { useState } from "react";

function TodoForm({ addTodo }) {
	const [value, setValue] = useState("");

	const handleSubmit = e => {
		e.preventDefault();
		if (!value) return;
		addTodo(value);
		setValue("");
	};

	return (
		<form onSubmit={handleSubmit} className="form">
			<input
				type="text"
				className="input form-control"
				placeholder="Add homework here..."
				value={value}
				onChange={e => setValue(e.target.value)}
			/>
		</form>
  );
}

export default TodoForm;