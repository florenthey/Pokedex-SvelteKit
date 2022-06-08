<script lang="ts">
	interface Pokemon {
		id: number;
		image: string;
		name: string;
	}
	import { pokemons } from '../stores/pokestore';
	import Card from '../components/Card.svelte';
	// Le $ sert à avoir accès à la data (et la voir la donnée dans la console)
	let searchTerm = '';
	let filteredPokemons: Array<object> = [];

	$: {
		if (searchTerm) {
			filteredPokemons = $pokemons.filter((pokemon: Pokemon) =>
				pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
			);
		} else {
			// filteredPokemons = [...$pokemons];
			filteredPokemons = $pokemons;
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
	<title>About Pokedex</title>
</svelte:head>

<!-- Remplace map -->
<div class="py-4 grid gap-4 md:grid-cols-2 grid-cols-1">
	{#each filteredPokemons as pokemon}
		<Card {pokemon} />
	{/each}
</div>
