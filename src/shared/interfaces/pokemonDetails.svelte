<script context="module" lang="ts">
	export interface PokemonDetails {
		id: number;
		image: string;
		name: string;
		types: Array<{ slot: number; type: { name: string } }>;
		height: number;
		weight: number;
		abilities: Array<string>;
		sprites: {
			front_default: string;
		};
		stats: Array<{
			name: string;
			value: number;
		}>;
	}
</script>
