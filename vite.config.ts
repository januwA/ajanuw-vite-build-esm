import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig(({ mode }) => {
  const isProduction = mode === "production";
  const buildUmd = process.env.BUILD_UMD === "true";

  return {
    plugins: [
      react(),
      // 生成 TypeScript 声明文件插件
      dts({
        include: ["src/**/*"], // 包含 src 目录下的所有文件
        outDir: buildUmd ? "dist/umd" : "dist/esm", // 根据构建类型设置输出目录
        insertTypesEntry: true, // 自动在 package.json 中插入 types 字段
        // 通过 compilerOptions 控制 source map 生成
        compilerOptions: {
          declarationMap: !isProduction, // 生产环境不生成声明文件的 source map
        },
      }),
    ],
    define: {
      "process.env.NODE_ENV": isProduction ? '"production"' : '"development"',
    },
    build: {
      // 生产环境不生成 source map
      sourcemap: !isProduction,
      // 设置输出目录
      outDir: buildUmd ? "dist/umd" : "dist/esm",
      // 库模式构建配置
      lib: buildUmd
        ? {
            // UMD 构建：单入口配置
            entry: resolve(__dirname, "src/react-shared.tsx"),
            formats: ["umd"],
            name: "ReactShared",
            fileName: () => "react-shared.js",
          }
        : {
            // ESM 构建：多入口配置，支持按需导入
            entry: {
              index: resolve(__dirname, "src/index.ts"), // 主入口文件
              add: resolve(__dirname, "src/add.ts"), // add 函数独立入口
              sub: resolve(__dirname, "src/sub.ts"), // sub 函数独立入口
              foo: resolve(__dirname, "src/foo.ts"), // foo 函数独立入口
              "react-shared": resolve(__dirname, "src/react-shared.tsx"),
            },
            formats: ["es"], // ESM 格式
          },
      rollupOptions: buildUmd
        ? {
            // UMD 构建：将依赖作为全局变量
            external: ["react", "react-dom", "react-router-dom", "react/jsx-runtime", "zustand"],
            output: {
              globals: {
                react: "React",
                "react-dom": "ReactDOM",
                "react-router-dom": "ReactRouterDOM",
                "react/jsx-runtime": "ReactJSXRuntime",
                zustand: "Zustand",
              },
            },
          }
        : {
            // ESM 构建：依赖保持外部
            external: [
              "react",
              "react-dom",
              "react/jsx-runtime",
              "react-router-dom",
              "zustand",
            ],
          },
    },
  };
});
