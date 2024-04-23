import Button from "./Buttons";


export default function Filter({ countToDo, handleFilter, handleClearDone }) {
    console.log('filter');


    return (
			<div className="filters container">
				<p>{countToDo} items left</p>
				<div className="filters__buttons">
					<Button onClick={() => handleFilter(null)} textButton={`All`} />
					<Button onClick={() => handleFilter(false)} textButton={'Active'} />
					<Button onClick={() => handleFilter(true)} textButton={'Completed'} />
				</div>
				<Button onClick={handleClearDone} textButton={'Clear Completed'} />
			</div>
		);
}