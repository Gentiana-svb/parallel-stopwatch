<script lang="ts">
	export let onClick: () => unknown
</script>

<svg viewBox="0 0 655 655" on:click={onClick} on:keydown={onClick}>
	<g transform="translate(-2499 -464)">
		<path
			d="M2506 791.5C2506 614.493 2649.49 471 2826.5 471 3003.51 471 3147 614.493 3147 791.5 3147 968.507 3003.51 1112 2826.5 1112 2649.49 1112 2506 968.507 2506 791.5Z"
			stroke="#000000"
			stroke-width="15"
			stroke-miterlimit="8"
			fill="none"
			fill-rule="evenodd"
		/>
		<path
			d="M2706 600 3036 791.5 2706 983Z"
			stroke="#000000"
			stroke-width="15"
			stroke-miterlimit="8"
			fill="none"
			fill-rule="evenodd"
		/>
	</g>
</svg>

<style>
	svg {
		cursor: pointer;
		margin: 20px;
		width: 100px;
	}
</style>
