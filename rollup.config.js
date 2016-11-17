import babel from 'rollup-plugin-babel';
import nodeResolve from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify';
import bundleSize from 'rollup-plugin-bundle-size';
import commonjs from 'rollup-plugin-commonjs';

const name = `bpost`;

const plugins = [
  babel(),
  nodeResolve({
    module: true,
    jsnext: true,
  }),
  commonjs({
    include: `node_modules/**`,
    namedExports: {
      'node_modules/lodash/lodash.js': [`find`],
    },
  }),
  bundleSize(),
];

const isProd = process.env.NODE_ENV === `production`;
if (isProd) plugins.push(uglify());

export default {
  entry: `src/index.js`,
  plugins,
  dest: `dist/${name}${isProd ? `.min` : ``}.js`,
  moduleName: name,
  format: `umd`,
};