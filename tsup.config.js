import { defineConfig } from 'tsup';

export default defineConfig({
  entryPoints: ['src'],
  format: ['cjs'],
  bundle: true,
  minify: true,
});
