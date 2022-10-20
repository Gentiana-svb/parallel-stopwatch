<script lang="ts">
	import Reset from '$lib/svg/Reset.svelte'
	import Start from '$lib/svg/Start.svelte'
	import Stop from '$lib/svg/Stop.svelte'

	let time = 0
	let timer: NodeJS.Timer | undefined

	const setTimer = () =>
		(timer = setInterval(() => {
			time += 1
		}, 10))

	const stopTimer = () => {
		clearInterval(timer)
		timer = undefined
	}
	const resetTimer = () => (time = 0)

	const format2digits = (num: number) =>
		Math.floor(num).toString().padStart(2, '0')

	$: timeStr = `${
		time > 36000 ? `${Math.floor(time / 36000).toString()}:` : ''
	}${format2digits(time / 6000)}:${format2digits(
		(time / 100) % 60
	)}:${format2digits(time % 100)}`
</script>

<div class="timer">
	{timeStr}
</div>
<div class="buttons">
	{#if timer}
		<Stop onClick={stopTimer} />
	{:else}
		<Start onClick={setTimer} />
		{#if time}
			<Reset onClick={resetTimer} />
		{/if}
	{/if}
</div>

<style>
	:global(body) {
		font-family: 'Courier New', Consolas, monospace;
	}
	.timer {
		font-size: 15vw;
		margin: 10px;
		display: flex;
		justify-content: center;
	}
	@media screen and (min-width: 640px) {
		.timer {
			font-size: 8rem;
		}
	}
	.buttons {
		display: flex;
		justify-content: center;
	}
</style>
