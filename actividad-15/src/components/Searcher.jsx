import React from 'react';
import { useSearch } from '../hooks/useSearch';
import './Searcher.css';

export default function Searcher() {
	const { query, updateQuery, error } = useSearch();

	const handleChange = ({ target }) => {
		updateQuery(target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log({ query });
	};

	return (
		<div className='search'>
			<h1 className='search__title'>Rick & Morty Characters</h1>
			<div className='search__div'>
				<form
					onSubmit={handleSubmit}
					className='search__form'>
					<input
						type='text'
						placeholder='Rick, Morty...'
						onChange={handleChange}
						className='search__input'
					/>
					<button
						type='submit'
						className='search__button'>
						Search
					</button>
				</form>
				{error && <p className='search__error'>{error}</p>}
			</div>
		</div>
	);
}
