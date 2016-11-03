// Rollup plugins
import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';

export default {
    entry: 'src/app.js',
    dest: 'public/js/app.min.js',
    format: 'iife',
    sourceMap: 'inline',
    plugins: [
        babel({
            exclude: 'node_modules/**',
            presets: [ 'es2015-rollup' ],
            babelrc: false
        }),
        (process.env.BUILD === 'production' && uglify())
    ]
};