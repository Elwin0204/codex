import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { uglify } from 'rollup-plugin-uglify';
const formats = ['iife', 'es', 'cjs'];

export default formats.map((format) => {
  return {
    input: 'index.js',
    output: {
      name: 'codex',
      file: `dist/main${format === 'iife' ? '' : `.${format}`}.js`,
      format: format
    },
    plugins: [
      resolve(),
      babel({
        exclude: 'node_modules/**'
      }),
      uglify()
    ]
  }
});