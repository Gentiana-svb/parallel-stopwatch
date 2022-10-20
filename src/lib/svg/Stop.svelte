<script lang="ts">
	export let onClick: () => unknown
</script>

<svg viewBox="0 0 655 655" on:click={onClick} on:keydown={onClick}>
	<g transform="translate(-3288 -1060)">
		<path
			d="M3295 1387.5C3295 1210.49 3438.49 1067 3615.5 1067 3792.51 1067 3936 1210.49 3936 1387.5 3936 1564.51 3792.51 1708 3615.5 1708 3438.49 1708 3295 1564.51 3295 1387.5Z"
			stroke="#000000"
			stroke-width="15"
			stroke-miterlimit="8"
			fill="none"
			fill-rule="evenodd"
		/>
		<rect
			x="3462"
			y="1235"
			width="306"
			height="306"
			stroke="#000000"
			stroke-width="15"
			stroke-miterlimit="8"
			fill="none"
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
