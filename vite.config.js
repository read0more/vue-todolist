import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')
const pathAlias = require('./path.alias.js');

// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias:{
      ...pathAlias
    },
  },
  plugins: [vue()]
})
