import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production';

  return {
    plugins: [
      // 生成 TypeScript 声明文件插件
      dts({
        include: ['src/**/*'],        // 包含 src 目录下的所有文件
        outDir: 'dist',              // 输出目录
        insertTypesEntry: true,      // 自动在 package.json 中插入 types 字段
        // 通过 compilerOptions 控制 source map 生成
        compilerOptions: {
          declarationMap: !isProduction,  // 生产环境不生成声明文件的 source map
        },
      }),
    ],
    build: {
      // 生产环境不生成 source map
      sourcemap: !isProduction,
      // 库模式构建配置
      lib: {
        // 多入口配置，支持按需导入
        entry: {
          index: resolve(__dirname, 'src/index.ts'),  // 主入口文件
          add: resolve(__dirname, 'src/add.ts'),      // add 函数独立入口
          sub: resolve(__dirname, 'src/sub.ts'),      // sub 函数独立入口
          foo: resolve(__dirname, 'src/foo.ts'),      // foo 函数独立入口
        },
        formats: ['es'],             // 只输出 ES 模块格式
      },
      rollupOptions: {
        output: {
          // 自定义输出文件名格式
          entryFileNames: '[name].js',    // 入口文件名格式
          chunkFileNames: '[name].js',    // 代码块文件名格式
          assetFileNames: '[name].[ext]', // 资源文件名格式
        },
      },
    },
  };
});