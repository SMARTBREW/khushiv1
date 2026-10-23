import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      "/v1": "http://localhost:4000",
      "/health-check": "http://localhost:4000",
    },
  },
});
