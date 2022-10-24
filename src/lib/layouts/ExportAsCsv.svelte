<script lang="ts">
	import Csv from '$lib/buttons/Csv.svelte'
	import InputText from '$lib/compoents/InputText.svelte'
	import Modal from '$lib/compoents/Modal.svelte'
	import { makeCsvDataURL } from '$lib/utils/makeCsvDataURL'

	export let header: string[]
	export let body: string[][]

	const download = () => {
		const href = makeCsvDataURL(body, header)
		if (!href) return
		const a = document.createElement('a')
		document.body.appendChild(a)
		a.download = `${filename}.csv`
		a.href = href
		a.click()
		a.remove()
	}

	let seen = false
	let filename = `records-${new Date().toISOString().slice(0, 10)}`
	let input: HTMLInputElement | undefined
</script>

<Csv
	onClick={() => {
		seen = true
		setTimeout(() => {
			input?.focus()
			input?.select()
		}, 10)
	}}
/>
{#if seen}
	<Modal onClick={() => (seen = false)}>
		<div class="flex rounded p-5 flex-col bg-white dark:bg-zinc-700">
			<span>
				<InputText
					bind:dom={input}
					bind:value={filename}
					Class="w-[50vw] sm:w-96 my-5"
				/>
				.csv
			</span>
			<button
				on:click={download}
				class="border rounded p-2 m-5 border-black dark:border-slate-200"
			>
				Export
			</button>
		</div>
	</Modal>
{/if}
