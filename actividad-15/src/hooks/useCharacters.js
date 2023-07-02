export function useCharacters(data) {
	const characters = data.map((character) => ({
		id: character.id,
		name: character.name,
		status: character.status,
		img: character.image,
		location: character.location.name,
	}));
	return { characters };
}
