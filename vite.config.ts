import {defineConfig} from 'vite';
import {PreRenderedAsset} from 'rollup'
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers';
import path from 'path';
// markdown转换插件
import {plugin as mdPlugin, Mode} from 'vite-plugin-markdown';
import viteCompression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig({
    base: 'Blob',
    server: {
        open: true
    },
    plugins: [
        vue(),
        AutoImport({
            resolvers: [ElementPlusResolver()]
        }),
        Components({
            resolvers: [ElementPlusResolver()]
        }),
        mdPlugin({
            mode: [Mode.HTML, Mode.VUE]
        }),
        // 压缩js和css文件
        viteCompression({
            verbose: true,
            disable: false,
            threshold: 10240,
            algorithm: 'gzip',
            ext: '.gz'
        })
    ],
    resolve: {
        alias: {
            vue: 'vue/dist/vue.esm-bundler.js',
            '@': path.resolve(__dirname, './src'),
            '@posts': path.resolve(__dirname, './posts'),
            '@DataConfig': path.resolve(__dirname, './DataConfig')
        }
    },
    build: {
        outDir: 'docs',
        rollupOptions: {
            output: {
                // 梳理分流原dist/assets目录
                chunkFileNames: 'static/js/[name]-[hash].js',
                entryFileNames: 'static/js/[name]-[hash].js',
                assetFileNames(id: PreRenderedAsset): string {
                    if (id.name.endsWith('expect.png')) {
                        console.log(id); // todo: remove origin expect.png
                        return 'public/[name].[ext]';
                    }
                    return 'static/[ext]/[name]-[hash].[ext]';
                },
                // 静态资源分割
                manualChunks(id) {
                    if (id.includes('node_modules')) {
                        return id
                            .toString()
                            .split('node_modules/')[1]
                            .split('/')[0]
                            .toString();
                    }
                }
            }
        }
    }
});
