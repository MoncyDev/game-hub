import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: "dist", // Output directory for Vite build
  },
  server: {
    proxy: {
      "/api": "http://localhost:3030",
    },
  },
});
