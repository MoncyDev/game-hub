import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // Output directory for Vite build
  },
  server: {
    proxy: {
      // Optional: Proxy for development, only if you want to avoid CORS locally
      "/api": "http://localhost:3030",
    },
  },
});
