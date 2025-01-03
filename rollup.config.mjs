import typescript from '@rollup/plugin-typescript';
import terser from "@rollup/plugin-terser";
import dts from 'rollup-plugin-dts';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
        sourcemap: false
      },
      {
        file: 'dist/index.esm.js',
        format: 'es',
        sourcemap: false
      }
    ],
    plugins: [
      typescript({
        tsconfig: './tsconfig.json'
      }),
      terser()
    ]
  },
  {
    input: 'src/index.ts',
    output: [{ file: 'dist/index.d.ts', format: 'es' }],
    plugins: [dts()]
  }
]; 