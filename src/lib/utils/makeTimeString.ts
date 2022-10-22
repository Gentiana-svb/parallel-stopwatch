const format2digits = (num: number) =>
	Math.floor(num).toString().padStart(2, '0')

export const makeTimeString = (time: number, millisec = true) =>
	`${
		time > 360000 ? `${Math.floor(time / 360000).toString()}:` : ''
	}${format2digits((time / 6000) % 60)}:${format2digits((time / 100) % 60)}${
		millisec ? `.${format2digits(time % 100)}` : ''
	}`
