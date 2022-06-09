<script lang="ts" context="module">
	import type { PokemonDetails } from '../shared/interfaces/pokemonDetails.svelte';
	// Equivalent du getStaticProps dans Next.js
	export async function load() {
		const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`);
		const data = await res.json();
		const loadedPokemons = data.results.map((pokemon: PokemonDetails, index: number) => {
			return {
				id: index + 1,
				name: pokemon.name,
				image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
					index + 1
				}.png`
			};
		});
		console.log('LOADED', loadedPokemons);
		return { props: { pokemons: loadedPokemons } };
	}
</script>

<script lang="ts">
	interface Pokemon {
		id: number;
		image: string;
		name: string;
	}
	// import { pokemons } from '../stores/pokestore';
	export let pokemons: Array<Pokemon>;
	import Card from '../components/Card.svelte';
	// Le $ sert à avoir accès à la data (et la voir la donnée dans la console)
	let searchTerm = '';
	let filteredPokemons: Array<object> = [];

	$: {
		if (searchTerm) {
			console.log(searchTerm);
			filteredPokemons = pokemons.filter((pokemon: Pokemon) =>
				pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
			);
			console.log(filteredPokemons);
		} else {
			// filteredPokemons = [...$pokemons];
			filteredPokemons = pokemons;
		}
	}
</script>

<h1 class="text-4xl text-center my-8 uppercase">SvelteKit Pokedex</h1>

<input
	class="w-full rounded-md text-lg p-4 border-2 border-gray-200"
	type="text"
	placeholder="Rechercher un pokemon"
	bind:value={searchTerm}
/>

<svelte:head>
	<title>Pokedex</title>
</svelte:head>

<!-- Remplace map -->
<div class="py-4 grid gap-4 md:grid-cols-2 grid-cols-1">
	{#each filteredPokemons as pokemon}
		<Card {pokemon} />
	{/each}
</div>
