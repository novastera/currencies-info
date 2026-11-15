import { copyFileSync, rmSync } from 'node:fs';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import dts from 'rollup-plugin-dts';

rmSync('dist', { recursive: true, force: true });

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/index.cjs',
        format: 'cjs',
        sourcemap: false,
        exports: 'named',
      },
      {
        file: 'dist/index.esm.js',
        format: 'es',
        sourcemap: false,
      },
    ],
    plugins: [
      typescript({
        tsconfig: './tsconfig.json',
      }),
      terser(),
    ],
  },
  {
    input: 'src/index.ts',
    output: [{ file: 'dist/index.d.ts', format: 'es' }],
    plugins: [
      dts(),
      {
        name: 'copy-cjs-types',
        closeBundle() {
          copyFileSync('dist/index.d.ts', 'dist/index.d.cts');
        },
      },
    ],
  },
];
