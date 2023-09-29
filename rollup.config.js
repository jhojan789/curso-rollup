import html from '@rollup/plugin-html';
import css from 'rollup-plugin-css-only';
import copy from 'rollup-plugin-copy';
import image from '@rollup/plugin-image';


export default {
  input: "src/index.js",
  output:{
    file: "dist/bundle.js",
    format: "es",
    sourcemap: true,
  },
  plugins:[
    copy({
      targets:[{
        src: 'src/assets/**/*',
        dest: 'dest/assets'
        
      }]
    }),
    css({
      output: 'bundle.css'
    }),
    html(),
    image()
  ]

}