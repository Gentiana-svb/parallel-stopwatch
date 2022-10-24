<script lang="ts">
	export let value: string
	export let Class = ''
	export let dom: HTMLInputElement | undefined = undefined
</script>

<label>
	<input
		bind:this={dom}
		bind:value
		class="outline-none border-b focus:border-b-2 border-black dark:border-slate-200 bg-inherit text-2xl rounded-none {Class}"
	/>
</label>
