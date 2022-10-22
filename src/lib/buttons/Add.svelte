<script lang="ts">
	export let onClick: () => unknown
	export let Class = ''
</script>

<svg
	viewBox="0 0 455 455"
	on:click={onClick}
	on:keydown={onClick}
	class="cursor-pointer {Class}"
>
	<polygon
		points="455,212.5 242.5,212.5 242.5,0 212.5,0 212.5,212.5 0,212.5 0,242.5 212.5,242.5 212.5,455 242.5,455 242.5,242.5 
	455,242.5 "
	/>
</svg>
