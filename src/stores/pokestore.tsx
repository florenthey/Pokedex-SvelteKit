import { writable } from 'svelte/store';

// Mon store
export const pokemons = writable([]);

const fetchPokemons = async () => {
	const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`);
	const data = await res.json();
	const loadedPokemons = data.results.map((pokemon, index) => {
		return {
			id: index + 1,
			name: pokemon.name,
			image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
				index + 1
			}.png`
		};
	});

	// Equivalent de setState dans React
	pokemons.set(loadedPokemons);
};
fetchPokemons();
