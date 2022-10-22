<script lang="ts">
	import Add from '$lib/buttons/Add.svelte'
	import Delete from '$lib/buttons/Delete.svelte'
	import Lap from '$lib/buttons/Lap.svelte'
	import { makeTimeString } from '$lib/utils/makeTimeString'

	type RecordT = {
		name: string
		laps: number[]
	}

	export let time: number
	export let counting: boolean

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

<div
	class="grid grid-cols-[repeat(1,auto)] sm:grid-cols-[repeat(2,auto)] place-items-center sm:justify-start w-[90vw]"
>
	<Add onClick={addRecord} Class="w-10 my-5" />
	<div />
	{#each records as record, index}
		{@const laps = record.laps}
		<div class="flex items-center m-5">
			<Delete onClick={() => deleteRecord(index)} Class="w-7 m-3" />
			<label>
				<input
					bind:value={record.name}
					class="outline-none border-b focus:border-b-2 border-black text-2xl w-48"
				/>
			</label>
			<div class="w-10 mx-5">
				{#if counting}
					<Lap
						onClick={() => (record.laps = [time, ...record.laps])}
						Class=""
					/>
				{/if}
			</div>
		</div>
		<div class="flex sm:justify-self-start overflow-x-auto">
			{#each laps as lap}
				<div Class="mr-10 text-2xl">
					{makeTimeString(lap)}
				</div>
			{/each}
		</div>
	{/each}
</div>
