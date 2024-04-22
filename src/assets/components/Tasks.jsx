import { useState } from 'react';
import Button from './Buttons';

export default function Task({ todo, onChangeTodo, onDelete }) {
	const [isEditing, setIsEditing] = useState(false);

	return (
		<>
			<input
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
						value={todo.title}
						onChange={(e) => onChangeTodo({ ...todo, title: e.target.value })}
					/>
				</>
			) : (
				<>{todo.title}</>
			)}

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
				<Button onClick={() => onDelete(todo.id)} textButton={'Delete'} />
			</div>
		</>
	);
}
