import { useState } from 'react';
import './Todolist.css';

function Todolist() {
	return (
		<>
			<h1>ToDo List</h1>
			<form action="submit">
				<input
					type="text"
					name="todo"
					id="add-todo"
					placeholder="Type a new todo"
				/>
				<button type="submit">Add Todo</button>
			</form>
			<hr />
			<h2>Todos</h2>
			<div className="todos">
				<div className="todos__item">
					<input type="checkbox" name="todo-1" id="todo-1" />
					<label htmlFor="todo-1">Learn React</label>
				</div>
				<div className="todos__item">
					<input type="checkbox" name="todo-2" id="todo-2" />
					<label htmlFor="todo-2">Be Awesome!</label>
				</div>
			</div>
		</>
	);
}

export default Todolist;
