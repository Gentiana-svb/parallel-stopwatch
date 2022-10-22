import { browser } from '$app/environment'

export const worker = <T, R>(
	onMessage: (postMessage: (result: R) => unknown, arg?: T) => void,
	callback: (result: R) => unknown,
	arg?: T
) => {
	if (!browser) return
	const worker = new Worker(
		URL.createObjectURL(
			new Blob(
				[
					`
					const fn = ${onMessage.toString()}
					self.onmessage = (e) => fn(self.postMessage, e.data)
					`
				],
				{
					type: 'text/javascript'
				}
			)
		)
	)
	worker.postMessage(arg)
	worker.onmessage = e => callback(e.data)
}
