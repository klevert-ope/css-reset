import postcss from 'rollup-plugin-postcss';
import terser  from '@rollup/plugin-terser';

export default {
	input: 'src/cssreset.js',
	output: {
		file: 'dist/cssreset.js',
		format: 'umd',
		name: 'css-reset',
	},
	plugins: [
		postcss({
			extract: true,
			minimize: true,
		}),
		terser(),
	],
};
