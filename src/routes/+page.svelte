<script lang="ts">
	import Reset from '$lib/buttons/Reset.svelte'
	import Start from '$lib/buttons/Start.svelte'
	import Stop from '$lib/buttons/Stop.svelte'
	import Records from '$lib/layouts/Records.svelte'
	import { worker } from '$lib/utils/worker'
	import { makeTimeString } from '$lib/utils/makeTimeString'
	import '../app.css'

	let time = 0
	let counting = false

	worker(
		post => setInterval(() => post(''), 10),
		_ => (counting ? time++ : null)
	)
</script>

<svelte:head>
	<title>{makeTimeString(time, false)} - Parallel Stopwatch</title>
</svelte:head>

<div class="text-7xl sm:text-9xl flex justify-center m-10">
	{makeTimeString(time)}
</div>
<div class="flex justify-center">
	{#if counting}
		<Stop onClick={() => (counting = !counting)} Class="w-24 mx-5" />
	{:else}
		<Start onClick={() => (counting = !counting)} Class="w-24 mx-5" />
		{#if time}
			<Reset onClick={() => (time = 0)} Class="w-16 mx-5" />
		{/if}
	{/if}
</div>
<Records {time} {counting} />
