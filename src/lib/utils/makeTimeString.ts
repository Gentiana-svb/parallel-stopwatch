const ignoreNaN = (x: number) => (isNaN(x) ? 0 : x)

const format2digits = (num: number) =>
	ignoreNaN(Math.floor(num)).toString().padStart(2, '0')

export const makeTimeString = (
	time: number,
	options?: {
		hideMilliSec?: boolean
		hideZero?: boolean
	}
) => {
	const t = ignoreNaN(time)

	return !options?.hideZero || t !== 0
		? `${
				t > 360000 ? `${ignoreNaN(Math.floor(t / 360000)).toString()}:` : ''
		  }${format2digits((t / 6000) % 60)}:${format2digits((t / 100) % 60)}${
				options?.hideMilliSec ? '' : `.${format2digits(t % 100)}`
		  }`
		: ''
}
