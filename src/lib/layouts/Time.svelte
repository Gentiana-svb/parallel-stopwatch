<script lang="ts">
	export let time = 0
	export let Class = ''

	const format2digits = (num: number) =>
		Math.floor(num).toString().padStart(2, '0')

	$: timeStr = `${
		time > 360000 ? `${Math.floor(time / 360000).toString()}:` : ''
	}${format2digits((time / 6000) % 60)}:${format2digits(
		(time / 100) % 60
	)}.${format2digits(time % 100)}`
</script>

<div class={Class}>
	{timeStr}
</div>
