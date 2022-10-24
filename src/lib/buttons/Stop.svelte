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
	<g transform="translate(-3288 -1060)">
		<rect
			x="3462"
			y="1235"
			width="306"
			height="306"
			stroke-width="15"
			stroke-miterlimit="8"
			fill="none"
		/>
	</g>
</svg>
