import React, { useEffect, useState } from 'react';
import { format, subHours, startOfMonth } from 'date-fns';
import {
	MonthlyBody,
	MonthlyDay,
	MonthlyCalendar,
	MonthlyNav,
	DefaultMonthlyEventItem,
} from '@zach.codes/react-calendar';

export default function Calendar() {
	const [currentMonth, setCurrentMonth] = useState(startOfMonth(new Date()));
	const [todos, setTodos] = useState(() => {
		const storedTodos = JSON.parse(localStorage.getItem('todos'));
		return storedTodos || [];
	});
	useEffect(() => {
		const storedTodos = JSON.parse(localStorage.getItem('todos'));
	}, []);

	return (
		<>
			<section className='calendar'>

			<h1>Calendar</h1>
			<MonthlyCalendar
				currentMonth={currentMonth}
				onCurrentMonthChange={(date) => setCurrentMonth(date)}
				>
				<MonthlyNav />
				<MonthlyBody events={todos}>
					<MonthlyDay
						renderDay={(data) =>
							data.map((todo) => (
								<DefaultMonthlyEventItem
								key={todo.id}
								title={todo.title}
								// tag={todo.tag}
								// Format the date here to be in the format you prefer
								// date={format(item.date, 'k:mm')}
								/>
							))
						}
						/>
				</MonthlyBody>
			</MonthlyCalendar>
						</section>
		</>
	);
}
