import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoForm from './TodoForm';

test('todo adder mounted', () => {
	const {debug, getByLabelText,getByText } = render(<TodoForm/>);
	const input = getByLabelText(/addForm/i);
	expect(input).toBeInTheDocument();
});
test('adds a todo and clears afterwords', () => {
	const mockFun = jest.fn();
	const {debug, getByLabelText,getByText } = render(<TodoForm addTodo={mockFun} />);
	const input = getByLabelText(/addForm/i);
	expect(input).toBeInTheDocument();

	fireEvent.change(input, {target:{value:"new homework"}});
	expect(input.value).toContain("new homework");
	debug();

	fireEvent.submit(input);
	expect(mockFun).toHaveBeenCalled();
	expect(input.value).toBe("");
});