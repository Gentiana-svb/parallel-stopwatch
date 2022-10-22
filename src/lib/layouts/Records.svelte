<script lang="ts">
	import Add from '$lib/buttons/Add.svelte'
	import Delete from '$lib/buttons/Delete.svelte'
	import Lap from '$lib/buttons/Lap.svelte'
	import Time from '$lib/layouts/Time.svelte'

	type RecordT = {
		name: string
		laps: number[]
	}

	export let time: number
	export let timer: NodeJS.Timer | undefined

	let records: RecordT[] = [
		{
			name: 'Record 1',
			laps: []
		}
	]

	$: if (time === 0) {
		records = records.map(x => ({ ...x, laps: [] }))
	}

	const addRecord = () =>
		(records = [
			{
				name: `Record ${records.length + 1}`,
				laps: []
			},
			...records
		])

	const deleteRecord = (index: number) =>
		(records = [...records.slice(0, index), ...records.slice(index + 1)])
</script>

<div class="grid grid-cols-[repeat(3,auto)] place-items-center justify-start">
	<Add onClick={addRecord} Class="flex justify-center w-8 my-5" />
	<div />
	<div />
	{#each records as record, index}
		{@const laps = record.laps}
		<div class="flex items-center m-5">
			<Delete onClick={() => deleteRecord(index)} Class="w-7 m-3" />
			<input
				bind:value={record.name}
				class="outline-none border-b focus:border-b-2 border-black text-2xl w-48"
			/>
		</div>
		<div class="w-10">
			{#if timer}
				<Lap onClick={() => (record.laps = [time, ...record.laps])} Class="" />
			{/if}
		</div>
		<div class="flex justify-self-start">
			{#each laps as lap}
				<Time time={lap} Class="mx-10 text-2xl" />
			{/each}
		</div>
	{/each}
</div>
