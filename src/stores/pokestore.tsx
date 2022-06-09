import { writable } from 'svelte/store';

// Mon store
export const pokemons = writable([]);

const fetchPokemons = async () => {
	pokemons.set(loadedPokemons);
};
fetchPokemons();
