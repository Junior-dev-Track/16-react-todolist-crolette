import { useState } from 'react';
import Button from './Buttons';


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
							onKeyDown={(e) => {
								if (e.key === 'Enter') {
									onChangeTodo({
										...todo,
										title: e.target.value,
									});
									setIsEditing(!isEditing);
								}
							}}
						/>
					</>
				) : (
					<>
						<label htmlFor={todo.id}>{todo.title}</label>
					</>
				)}
			</div>
			<div className="task__buttons">
				{isEditing ? (
					<>
						<Button
							onClick={() => setIsEditing(!isEditing)}
							textButton={<i className="fa-solid fa-check"></i>}
						/>
					</>
				) : (
					<>
						<Button
							onClick={() => setIsEditing(!isEditing)}
							textButton={<i className="fa-solid fa-pen"></i>}
						/>
					</>
				)}
				{todo.done ? (
					<>
						<Button
							onClick={() => onDelete(todo.id)}
							textButton={<i className="fa-solid fa-trash"></i>}
							className={`btn--warning`}
						/>
					</>
				) : null}
			</div>
		</>
	);
}
