<script context="module" lang="ts">
	import { writable } from 'svelte/store';
	import type { PokemonDetails } from './shared/interfaces/pokemonDetails.svelte';

	export const pokemons = writable([]);
	const pokemonsDatas = {} as { [key: string]: PokemonDetails };
	let loaded = false;

	export const getPokemons = async () => {
		if (loaded) return;
		const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`);
		const data = await res.json();
		const loadedPokemon = data.results.map((data: PokemonDetails, index: number) => ({
			name: data.name,
			id: index + 1,
			image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
				index + 1
			}.png`
		}));
		pokemons.set(loadedPokemon);
		loaded = true;
	};

	export const getPokemon = async (id: number) => {
		if (pokemonsDatas[id]) return pokemonsDatas[id];

		try {
			const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
			const res = await fetch(url);
			const data = await res.json();
			pokemonsDatas[id] = data;
			return data;
		} catch (err) {
			console.error(err);
			return null;
		}
	};
</script>
