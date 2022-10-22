<script lang="ts">
	import Add from '$lib/buttons/Add.svelte'
	import Delete from '$lib/buttons/Delete.svelte'
	import Lap from '$lib/buttons/Lap.svelte'
	import ExportAsCsv from '$lib/layouts/ExportAsCsv.svelte'
	import { makeTimeString } from '$lib/utils/makeTimeString'
	import { parse } from '$lib/utils/parse'
	import { safeLocalStorage } from '$lib/utils/safeLocalStorage'

	type RecordT = {
		name: string
		laps: number[]
	}

	export let time: number
	export let counting: boolean

	const recoverdRecordsStr = safeLocalStorage.get('records')
	const recoverdRecords =
		recoverdRecordsStr !== undefined
			? parse<RecordT[]>(recoverdRecordsStr)
			: undefined

	let records: RecordT[] = recoverdRecords ?? [{ name: 'Record 1', laps: [] }]

	const addRecord = () =>
		(records = [
			...records,
			{
				name: `Record ${records.length + 1}`,
				laps: []
			}
		])

	$: if (time === 0) records = records.map(x => ({ ...x, laps: [] }))

	$: if (recoverdRecords !== undefined)
		safeLocalStorage.set('records', JSON.stringify(records))

	$: maxLap = records.length ? Math.max(...records.map(x => x.laps.length)) : 0
</script>

<div
	class="grid grid-cols-[repeat(1,auto)] sm:grid-cols-[repeat(2,auto)] place-items-center sm:justify-start w-[90vw] gap-3"
>
	<ExportAsCsv
		header={records.map(x => x.name)}
		body={[...Array(maxLap)].map((_, index) =>
			records.map(x => makeTimeString(x.laps[index], { hideZero: true }))
		)}
	/>
	<div />
	{#each records as record, index}
		{@const laps = record.laps}
		<div class="flex items-center">
			<Delete
				onClick={() =>
					(records = [...records.slice(0, index), ...records.slice(index + 1)])}
				Class="w-7 m-3"
			/>
			<label>
				<input
					bind:value={record.name}
					class="outline-none border-b focus:border-b-2 border-black text-2xl w-48 rounded-none"
				/>
			</label>
			<div class="w-10 mx-5">
				{#if counting}
					<Lap
						onClick={() => (record.laps = [...record.laps, time])}
						Class=""
					/>
				{/if}
			</div>
		</div>
		<div
			class="flex flex-col sm:flex-row sm:justify-self-start overflow-x-auto"
		>
			{#each laps as lap}
				<div Class="mr-10 text-2xl">
					{makeTimeString(lap)}
				</div>
			{/each}
		</div>
	{/each}
	<Add onClick={addRecord} Class="w-10 my-5" />
	<div />
</div>
