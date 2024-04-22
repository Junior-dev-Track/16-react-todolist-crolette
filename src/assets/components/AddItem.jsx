import { useState } from 'react';

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
		<>
			<form action="submit" onSubmit={handleSubmit}>
				<input
					type="text"
					name="todo"
					value={title}
					placeholder="Type a new todo"
					onChange={handleChange}
				/>
				<button type="submit">Add todo</button>
				
			</form>
		</>
	);
}

export default AddItem;
