<script lang="ts">
	import Add from '$lib/buttons/Add.svelte'
	import Delete from '$lib/buttons/Delete.svelte'
	import Lap from '$lib/buttons/Lap.svelte'
	import Reset from '$lib/buttons/Reset.svelte'
	import Start from '$lib/buttons/Start.svelte'
	import Stop from '$lib/buttons/Stop.svelte'
	import Records from '$lib/layouts/Records.svelte'
	import Time from '$lib/layouts/Time.svelte'
	import '../app.css'

	let time = 0
	let timer: NodeJS.Timer | undefined

	const setTimer = () => (timer = setInterval(() => time++, 10))

	const stopTimer = () => {
		clearInterval(timer)
		timer = undefined
	}

	const resetTimer = () => (time = 0)
</script>

<Time {time} Class="text-9xl flex justify-center m-10" />
<div class="flex justify-center">
	{#if timer}
		<Stop onClick={stopTimer} Class="w-24 mx-5" />
	{:else}
		<Start onClick={setTimer} Class="w-24 mx-5" />
		{#if time}
			<Reset onClick={resetTimer} Class="w-16 mx-5" />
		{/if}
	{/if}
</div>
<Records {time} {timer} />
