import React from 'react';
import './App.css';
import { CharacterGrid } from './components/CharacterGrid';
import { PageSwitcher } from './components/PageSwitcher';
import Searcher from './components/Searcher';
import { usePage } from './hooks/usePage';

function App() {
	const { page, setPage } = usePage();

	const handleChange = (newPage) => {
		setPage(newPage);
	};
	return (
		<>
			<main>
				<Searcher />
			</main>
			<section>
				<CharacterGrid
					page={page}
					max={9}
				/>
			</section>
			<br />
			<PageSwitcher
				currentPage={page}
				handlePage={handleChange}
			/>
		</>
	);
}

export default App;
