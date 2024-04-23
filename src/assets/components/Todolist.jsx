import { useEffect, useState } from 'react';
import '../styles/Todolist.css';
import Additem from './AddItem.jsx';
import Task from './Tasks.jsx';
import Button from './Buttons.jsx';

export default function Todolist() {
	const [todos, setTodos] = useState(() => {
		const storedTodos = JSON.parse(localStorage.getItem('todos'));
		return storedTodos || [];
	});
	const [filter, setFilter] = useState(null);
	const [countToDo, setCountToDo] = useState(todos.length);
	const [coutToDoDone, setCountToDoDone] = useState(
		todos.filter((todo) => todo.done === true).length
	);

	// Save todos to localStorage whenever todos change
	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
		setCountToDoDone(todos.filter((todo) => todo.done === true).length);
		setCountToDo(todos.filter((todo) => todo.done === false).length);
	}, [todos]);

	const getMaxId = () => {
		if (todos.length == 0) return 0;
		else {
			return Math.max(...todos.map((todo) => todo.id)) + 1;
		}
	};
	const handleAddItem = (title) => {
		const maxId = getMaxId();

		setTodos([
			...todos,
			{
				id: maxId,
				done: false,
				title: title,
			},
		]);
	};

	const handleFilter = (filterType) => {
		setFilter(filterType);
	};

	const handleClearDone = () => {
		setTodos(todos.filter((todo) => todo.done === false));
	};

	const handleChangeTodo = (todoToModify) => {
		setTodos(
			todos.map((todo) => {
				if (todo.id === todoToModify.id) {
					return todoToModify;
				} else {
					return todo;
				}
			})
		);
	};

	const handleDelete = (todoId) => {
		setTodos(todos.filter((todo) => todo.id !== todoId));
	};

	return (
		<>
			<Additem handleAddItem={handleAddItem} />

			<ul className="todos container">
				{todos
					.filter((todo) => filter === null || todo.done === filter)
					.map((todo) => (
						<li key={todo.id} className="todos__item">
							<Task
								todo={todo}
								onChangeTodo={handleChangeTodo}
								onDelete={handleDelete}
							/>
						</li>
					))}
			</ul>
			<div className="filters container">
				<p>{countToDo} items left</p>
				<div className="filters__buttons">

				<Button onClick={() => handleFilter(null)} textButton={`All`} />
				<Button
					onClick={() => handleFilter(false)}
					textButton={'Active'}
				/>
				<Button onClick={() => handleFilter(true)} textButton={'Completed'} />
				</div>
				<Button onClick={handleClearDone} textButton={'Clear Completed'} />
			</div>
		</>
	);
}
