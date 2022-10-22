<script lang="ts">
	import Reset from '$lib/buttons/Reset.svelte'
	import Start from '$lib/buttons/Start.svelte'
	import Stop from '$lib/buttons/Stop.svelte'
	import Records from '$lib/layouts/Records.svelte'
	import { makeTimeString } from '$lib/utils/makeTimeString'
	import '../app.css'

	let startTime = 0
	let diffTime = 0
	let allTime = 0
	let counting = false

	$: time = allTime + diffTime

	const now = () => new Date().getTime()

	const startCount = () => {
		startTime = now()
		counting = true
	}

	const resetCount = () => {
		allTime = 0
		counting = false
	}

	const stopCount = () => {
		allTime += now() - startTime
		diffTime = 0
		counting = false
	}

	setInterval(() => (counting ? (diffTime = now() - startTime) : null), 33)
</script>

<svelte:head>
	<title>
		{makeTimeString(time, { hideMilliSec: true })} - Parallel Stopwatch</title
	>
</svelte:head>

<div class="text-7xl sm:text-9xl flex justify-center m-10">
	{makeTimeString(time)}
</div>
<div class="flex justify-center">
	{#if counting}
		<Stop onClick={stopCount} Class="w-24 mx-5" />
	{:else}
		<Start onClick={startCount} Class="w-24 mx-5" />
		{#if time}
			<Reset onClick={resetCount} Class="w-16 mx-5" />
		{/if}
	{/if}
</div>
<Records {time} {counting} />
