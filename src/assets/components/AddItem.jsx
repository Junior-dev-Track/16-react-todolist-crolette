import { useState } from 'react';
import './AddItem.css'

function AddItem({ handleAddItem }) {
	const [title, setTitle] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault()
		handleAddItem(title);
		setTitle('')
	}

	const handleChange = (e) => {
		setTitle(e.target.value)
	}

	return (
		<>	<div className="container">
			<h1>TODO</h1>
			<form action="submit" onSubmit={handleSubmit} className="form__todo">
				<input
					type="text"
					name="todo"
					value={title}
					placeholder="Create a new todo..."
					onChange={handleChange}
				/>
				<button type="submit">
					Add todo  <i className="fa-solid fa-plus"></i>
				</button>

			</form>
		</div>
		</>
	);
}

export default AddItem;
