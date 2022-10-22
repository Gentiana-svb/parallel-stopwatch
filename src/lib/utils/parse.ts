export const parse = <T>(str: string | null): T | null => {
	if (!str) return null
	try {
		return JSON.parse(str)
	} catch {
		return null
	}
}
