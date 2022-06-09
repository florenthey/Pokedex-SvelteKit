<script>
	// l'équivalent d'une props en React
	export let pokemon;
	export const { id, image, name } = pokemon;
	import { fade } from 'svelte/transition';
</script>

<a
	class="p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center"
	href={`pokemon/${id}`}
	transition:fade
>
	<img class="h-40 w-40" src={image} alt={name} />
	<h2 class="uppercase 2-xl">{id}. {name}</h2>
</a>
