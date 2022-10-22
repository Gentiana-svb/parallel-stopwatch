import { browser } from '$app/environment'

const escape = (str: string | undefined) =>
	`"${str?.replace(/"/g, '""') ?? ''}"`

export const makeCsvDataURL = (
	body: string[][],
	header?: string[]
): string | null =>
	browser
		? URL.createObjectURL(
				new Blob(
					[
						new Uint8Array([0xef, 0xbb, 0xbf]),
						[
							header ? `${header.map(escape).join(',')}\n` : '',
							...body.map(row => `${row.map(escape).join(',')}\n`)
						].join('')
					],
					{
						type: 'text/csv'
					}
				)
		  )
		: null
