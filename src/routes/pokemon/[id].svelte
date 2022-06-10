<script lang="ts" context="module">
	// Equivalent du getStaticProps dans Next.js
	import { getPokemon } from '../../pokestore.svelte';
	export async function load({ params }: any) {
		let id = params.id;
		const pokemon = await getPokemon(id);
		return { props: { pokemon } };
	}
</script>

<script lang="ts">
	import type { PokemonDetails } from '../../shared/interfaces/pokemonDetails.svelte';
	export let pokemon: PokemonDetails;
	const type = pokemon.types[0].type.name;
</script>

<div class="flex flex-col items-center">
	<h1 class="text-4xl text-center my-8 uppercase">{pokemon.name}</h1>
	<p>
		Types: <strong>{type}</strong>
		| Height:<strong>{pokemon.height}</strong> | Weight:<strong>{pokemon.weight}</strong>
	</p>
	<img class="card-image" src={pokemon.sprites['front_default']} alt={pokemon.name} />
</div>
