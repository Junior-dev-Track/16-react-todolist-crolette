import { useEffect, useState } from 'react';
import './Todolist.css';
import Additem from './AddItem.jsx';
import Task from './Tasks.jsx';
import Button from './Buttons.jsx';

export default function Todolist() {
	const [todos, setTodos] = useState(() => {
		const storedTodos = JSON.parse(localStorage.getItem('todos'));
		return storedTodos || [];
	});

	const [countTodos, setCountTodos] = useState(todos.length)
	
	

	// Save todos to localStorage whenever todos change
	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

	function getMaxId() {
		if (todos.length == 0) return 0;
		else {
			return Math.max(...todos.map((todo) => todo.id)) + 1;
		}
	}
	function handleAddItem(title) {
		const maxId = getMaxId();

		setTodos([
			...todos,
			{
				id: maxId,
				done: false,
				title: title,
			},
		]);
	}

	function handleChangeTodo(todoToModify) {
		setTodos(
			todos.map((todo) => {
				if (todo.id === todoToModify.id) {
					return todoToModify;
				} else {
					return todo;
				}
			})
		);
	}

	const handleSave = (todo) => {
		handleChangeTodo({ ...todo, title: editedTitle });
		setIsEditing(false);
	};


	const handleDelete = (todoId) => {
		setTodos(todos.filter((todo) => todo.id !== todoId));
	};

	return (
		<>
			<h1>ToDo List</h1>
			<Additem handleAddItem={handleAddItem} />
			<hr />
			<h2>Todos</h2>
				<ul>
				{todos.map((todo) => (
					<li key={todo.id} className="todos__item">
					<Task
						todo={todo}
						onChangeTodo={handleChangeTodo}
						onDelete={handleDelete}
					/>
					</li>
				))}
				</ul>
			
		</>
	);
}
