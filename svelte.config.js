import adapter from '@sveltejs/adapter-static'
import preprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),
	kit: {
		adapter: adapter({
			fallback: 'index.html'
		}),
		trailingSlash: 'always',
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/parallel-stopwatch' : ''
		}
	}
}

export default config
