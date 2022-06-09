<script lang="ts" context="module">
	// Equivalent du getStaticProps dans Next.js
	export async function load({ params }: any) {
		const id = params.id;
		const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
		const pokemon = await res.json();
		return { props: { pokemon } };
	}
</script>

<script lang="ts">
	import type { PokemonDetails } from '../../shared/interfaces/pokemonDetails.svelte';
	export let pokemon: PokemonDetails;
	console.log(pokemon);
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
