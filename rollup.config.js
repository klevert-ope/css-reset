import terser from '@rollup/plugin-terser';
import postcss from 'rollup-plugin-postcss';

export default {
	input: 'src/cssreset.js',
	output: {
		file: 'dist/cssreset.js',
		format: 'umd',
		name: 'css-resetter',
	},
	plugins: [
		postcss({
			extract: true,
			minimize: true,
		}),
		terser(),
	],
};
