import { useState } from 'react';
import '../styles/AddItem.css';
import DatePicker from 'react-datepicker';

function AddItem({ handleAddItem }) {
	const [title, setTitle] = useState('');
	const [tag, setTag] = useState('');

	const [startDate, setStartDate] = useState(new Date());
	const handleSubmit = (e) => {
		e.preventDefault();
		handleAddItem(title, startDate, tag);
		setTitle('');
	};

	const handleChangeTitle = (e) => {
		setTitle(e.target.value);
	};

	const handleChangeTag = (e) => {
		setTag(e.target.value);
	};

	return (
		<>
			<section className="todo__form">
				<h1>TODO</h1>
				<form action="submit" onSubmit={handleSubmit} className="form__todo">
					<input
						type="text"
						name="todo"
						value={title}
						placeholder="Create a new todo..."
						onChange={handleChangeTitle}
					/>
					<select onChange={handleChangeTag} defaultValue={'public'}>
						<option value="private">Private</option>
						<option value="public">Public</option>
					</select>
					<DatePicker
						// showIcon
						dateFormat="dd/MM/yyyy"
						selected={startDate}
						onChange={(date) => setStartDate(date)}
					/>
					<button type="submit">
						Add todo <i className="fa-solid fa-plus"></i>
					</button>
				</form>
			</section>
		</>
	);
}

export default AddItem;
