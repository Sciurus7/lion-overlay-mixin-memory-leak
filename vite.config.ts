import { defineConfig } from 'vite';

// @ts-expect-error Yes this exists TS
const base: string | undefined = process.env.BASE_URL;

export default defineConfig({
	base,
	build: {
		outDir: './public',
		minify: false,
		target: ['esnext'],
		sourcemap: true,
	},
	publicDir: false,
})
