import { useState } from 'react';
import './Todolist.css';

const todos = ["Learn React", "Be awesome!", "Another To Do"]

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

			<ul className="todos">
				{todos.map((todo, index) => (
					<li key={`todo-${index}`} className="todos__item">
						<input
							type="checkbox"
							name={`todo-${index}`}
							id={`todo-${index}`}
						/>
						<label htmlFor={`todo-${index}`}>{todo}</label>
					</li>
				))}
			</ul>
		</>
	);
}

export default Todolist;
