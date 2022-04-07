const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['src/FinancialPlugin.js'],
  outfile: 'dist/financial-plugin.min.js',
  bundle: false,
  sourcemap: true,
  minify: true,
  splitting: false,
  format: 'esm',
  target: ['es2015']
}).catch(() => process.exit(1));

esbuild.build({
  entryPoints: ['src/FinancialPlugin.js'],
  outfile: 'dist/financial-plugin.min.cjs',
  bundle: false,
  sourcemap: true,
  minify: true,
  splitting: false,
  format: 'cjs',
  target: ['es2015']
})
.catch(() => process.exit(1));