<script lang="ts">
	import Reset from '$lib/buttons/Reset.svelte'
	import Start from '$lib/buttons/Start.svelte'
	import Stop from '$lib/buttons/Stop.svelte'
	import Records from '$lib/layouts/Records.svelte'
	import { makeTimeString } from '$lib/utils/makeTimeString'
	import { safeLocalStorage } from '$lib/utils/safeLocalStorage'
	import '../app.css'
	import darkPng from '$lib/assets/favicon/dark.png'
	import lightPng from '$lib/assets/favicon/light.png'
	import darkSvg from '$lib/assets/favicon/dark.svg'
	import lightSvg from '$lib/assets/favicon/light.svg'
	import { theme } from 'svelte-dark-theme'
	import Moon from '$lib/buttons/Moon.svelte'
	import Sun from '$lib/buttons/Sun.svelte'
	import darkApple from '$lib/assets/apple-touch-icon/dark.png'
	import lightApple from '$lib/assets/apple-touch-icon/light.png'
	import System from '$lib/buttons/System.svelte'
	import { page } from '$app/stores'

	let startTime = 0
	let diffTime = 0
	let allTime = Number(safeLocalStorage.get('allTime')) ?? 0
	let counting = false

	$: time = allTime + diffTime

	const now = () => new Date().getTime()

	const startCount = () => {
		startTime = now()
		counting = true
	}

	const resetCount = () => {
		allTime = 0
		safeLocalStorage.set('allTime', '0')
		counting = false
	}

	const stopCount = () => {
		allTime += now() - startTime
		safeLocalStorage.set('allTime', allTime.toString())
		diffTime = 0
		counting = false
	}

	setInterval(() => (counting ? (diffTime = now() - startTime) : null), 33)

	$: dark = $theme.isDark
</script>

<svelte:head>
	<title>
		{makeTimeString(time, { hideMilliSec: true })} - Parallel Stopwatch
	</title>
	<link rel="icon" href={dark ? darkPng : lightPng} />
	<link rel="icon" href={dark ? darkSvg : lightSvg} type="image/svg+xml" />
	<link rel="apple-touch-icon" href={dark ? darkApple : lightApple} />
	<meta property="og:url" content={$page.url.href} />
</svelte:head>

<div class="flex items-center justify-end m-3">
	{#if $theme.isDark}
		<Sun Class="w-8" onClick={() => theme.change('light')} />
	{:else}
		<Moon Class="w-8" onClick={() => theme.change('dark')} />
	{/if}
	<label class="flex items-center">
		<input
			type="checkbox"
			class="scale-150 ml-5"
			checked={$theme.setting === 'sync'}
			on:click={() => theme.change('sync')}
		/>
		<System Class="w-5 ml-3 mr-2" />
		System default
	</label>
</div>
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
