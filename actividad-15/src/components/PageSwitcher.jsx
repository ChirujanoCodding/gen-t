import React from 'react';

export function PageSwitcher({ currentPage, handlePage }) {
	const increment = () => {
		currentPage <= 20 && handlePage(currentPage + 1);
	};
	const decrement = () => {
		currentPage > 1 && handlePage(currentPage - 1);
	};
	return (
		<div>
			<button onClick={decrement}>{'<'}</button>
			<button onClick={increment}>{'>'}</button>
		</div>
	);
}
