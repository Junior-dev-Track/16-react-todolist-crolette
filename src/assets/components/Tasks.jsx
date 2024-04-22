import { useState } from 'react';
import Button from './Buttons';
import './Buttons.css';
import './Tasks.css';

export default function Task({ todo, onChangeTodo, onDelete }) {
	const [isEditing, setIsEditing] = useState(false);

	return (
		<>
			<div className="task">
				<input
					id={todo.id}
					type="checkbox"
					checked={todo.done}
					onChange={(e) => {
						onChangeTodo({
							...todo,
							done: e.target.checked,
						});
					}}
				/>

				{isEditing ? (
					<>
						<input
							type="text"
							value={todo.title}
							onChange={(e) => onChangeTodo({ ...todo, title: e.target.value })}
						/>
					</>
				) : (
					<>
						<label for={todo.id}>{todo.title}</label>
					</>
				)}
			</div>
			<div className="form__buttons">
				{isEditing ? (
					<>
						<Button
							onClick={() => setIsEditing(!isEditing)}
							textButton={'Sauver'}
						/>
					</>
				) : (
					<>
						<Button
							onClick={() => setIsEditing(!isEditing)}
							textButton={'Modifier'}
						/>
					</>
				)}
				<Button onClick={() => onDelete(todo.id)} textButton={'Delete'} className={`btn--warning`} />
			</div>
		</>
	);
}
