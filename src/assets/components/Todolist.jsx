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
	const [filter, setFilter] = useState(null);
	const [countToDo, setCountToDo] = useState(todos.length);
	const [coutToDoDone, setCountToDoDone] = useState(
		todos.filter((todo) => todo.done === true).length
	);

	// Save todos to localStorage whenever todos change
	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
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
		setCountToDo(countToDo + 1);
	};

	const handleFilterAll = () => {
		console.log('handleFilterAll');
		setFilter(null);
	};

	const handleFilterToDo = () => {
		console.log('handleFilterAll');
		setFilter(false);
	};

	const handleFilterDone = () => {
		console.log('handleFilterDone');
		setFilter(true);
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
		setCountToDoDone(todos.filter((todo) => todo.done === true).length);
	};

	const handleDelete = (todoId) => {
		setTodos(todos.filter((todo) => todo.id !== todoId));
		setCountToDo(countToDo - 1);
	};

	return (
		<>
			<Additem handleAddItem={handleAddItem} />
			<hr />
			<ul>
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
			<div>
				{/* {countToDo} */}
				<Button onClick={handleFilterAll} textButton={`All To Do's`} />
				{/* {countToDo - coutToDoDone} */}
				<Button onClick={handleFilterToDo} textButton={'Filter To Do'} />
				{/* {coutToDoDone} */}
				<Button onClick={handleFilterDone} textButton={'Filter Done'} />
			</div>
		</>
	);
}
