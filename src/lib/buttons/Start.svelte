<script lang="ts">
	export let onClick: () => unknown
	export let Class = ''
</script>

<svg
	viewBox="0 0 655 655"
	on:click={onClick}
	on:keydown={onClick}
	class="cursor-pointer {Class}"
>
	<g transform="translate(-2499 -464)">
		<path
			d="M2706 600 3036 791.5 2706 983Z"
			stroke-width="15"
			stroke-miterlimit="8"
			fill="none"
			fill-rule="evenodd"
		/>
	</g>
</svg>
