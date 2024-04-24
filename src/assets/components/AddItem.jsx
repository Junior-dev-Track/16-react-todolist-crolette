import { useState } from 'react';
import '../styles/AddItem.css';
import DatePicker from 'react-datepicker';

function AddItem({ handleAddItem }) {
	const [title, setTitle] = useState('');

	const [startDate, setStartDate] = useState(new Date());
	const handleSubmit = (e) => {
		e.preventDefault();
		handleAddItem(title, startDate);
		setTitle('');
	};

	const handleChange = (e) => {
		setTitle(e.target.value);
	};

	const handleDateSelect = () => {

	}

	return (
		<>
			<h1>TODO</h1>
			<form action="submit" onSubmit={handleSubmit} className="form__todo">
				<input
					type="text"
					name="todo"
					value={title}
					placeholder="Create a new todo..."
					onChange={handleChange}
				/>
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
		</>
	);
}

export default AddItem;
