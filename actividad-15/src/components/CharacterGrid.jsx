import React, { useEffect, useState } from 'react';
import './CharacterGrid.css';
import { API_URL } from '../utils';
import Character from './Character';
import { useCharacters } from '../hooks/useCharacters';
import { usePage } from '../hooks/usePage';

function usePagination() {}

export function CharacterGrid({ page = 1, max = 9 }) {
	const [characters, setCharacters] = useState([]);
	const [paginatedCharacters, setPaginatedCharacters] = useState([]);
	const { page: localPage, setPage: setLocalPage } = usePage(page);

	async function getData() {
		const response = await fetch(`${API_URL}/character?page=${localPage}`);
		const data = await response.json();
		return data.results;
	}
	// Se encarga de traer todos los datos por primera vez.
	useEffect(() => {
		getData().then((data) => {
			const { characters } = useCharacters(data);
			setCharacters(characters);
		});
	}, []);

	useEffect(() => {
		if (paginatedCharacters.length <= 0) {
			getData().then((data) => {
				const { characters } = useCharacters(data);
				setCharacters(characters);
				const startIndex = (page - 1) * max;
				const endIndex = page * max;
				const slicedCharacters = characters.slice(startIndex, endIndex);
				setPaginatedCharacters(slicedCharacters);
				setLocalPage(page);
			});
		}
	}, [paginatedCharacters, page]);

	// Este no hace mas que cargar los datos
	useEffect(() => {
		const startIndex = (page - 1) * max;
		const endIndex = page * max;
		const slicedCharacters = characters.slice(startIndex, endIndex);
		setPaginatedCharacters(slicedCharacters);
	}, [characters, page, max]);

	return (
		<div className='characters'>
			{paginatedCharacters.map((character) => (
				<Character
					key={character.id}
					location={character.location.name}
					{...character}
				/>
			))}
		</div>
	);
}
