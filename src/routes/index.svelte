<script lang="ts">
	import Card from '../components/Card.svelte';
	import type { Pokemon } from '../shared/interfaces/pokemon.svelte';
	import { pokemons, getPokemons } from '../pokestore.svelte';
	// Le $ sert à avoir accès à la data du store
	let searchTerm = '';
	let filteredPokemons: Array<object> = [];
	$: {
		if (searchTerm) {
			filteredPokemons = $pokemons.filter((pokemon: Pokemon) => {
				return pokemon.name.toLowerCase().includes(searchTerm.toLowerCase());
			});
		} else {
			filteredPokemons = [...$pokemons];
		}
	}
	getPokemons();
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
