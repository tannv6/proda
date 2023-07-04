import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": resolve(__dirname, "./src/components"),
      "@assets": resolve(__dirname, "./src/assets"),
      "@scss": resolve(__dirname, "./src/assets/scss"),
      "@style": resolve(__dirname, "./src/assets/style"),
      "@img": resolve(__dirname, "./src/assets/img"),
      "@routes": resolve(__dirname, "./src/routes"),
      "@pages": resolve(__dirname, "./src/pages"),
      "@utils": resolve(__dirname, "./src/utils"),
      "@modules": resolve(__dirname, "./src/modules"),
      "@node": resolve(__dirname, "./node_modules"),
      "@": resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      "/api": "http://localhost:3000",
    },
  },
});
