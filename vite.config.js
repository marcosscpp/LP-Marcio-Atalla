import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  build: {
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
    rollupOptions: {
      input: {
        main: "./index.html",
        "qualidade-vida": "./qualidade-vida.html",
        "oferta-unica": "./oferta-unica.html",
        "qualidade": "./qualidade.html",
      },
    },
  },

  resolve: {
    alias: {
      "@php": "/php",
    },
  },
});
