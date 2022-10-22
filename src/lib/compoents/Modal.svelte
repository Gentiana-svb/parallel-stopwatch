<script lang="ts">
	import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
	import { onDestroy, onMount } from 'svelte'

	export let onClick: () => unknown = () => null

	let div: HTMLDivElement | undefined

	onMount(() => (div ? disableBodyScroll(div) : null))
	onDestroy(() => (div ? enableBodyScroll(div) : null))
</script>

<div
	class="fixed flex items-center justify-center top-0 left-0 w-screen h-screen z-40"
	style:background="rgba(0, 0, 0, 0.5)"
	bind:this={div}
	on:mouseup={onClick}
	on:keydown|stopPropagation={onClick}
>
	<div
		Class="p-2 m-10 bg-sub-bg z-[100] rounded-sm"
		on:mouseup|stopPropagation
		on:keydown|stopPropagation
	>
		<slot />
	</div>
</div>
