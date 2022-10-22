import { browser } from '$app/environment'

export const safeLocalStorage = {
	get: (key: string) => (browser ? localStorage.getItem(key) : undefined),
	set: (key: string, value: string) =>
		browser ? localStorage.setItem(key, value) : undefined
}
