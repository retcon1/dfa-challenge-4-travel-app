import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: ["./src/tests/setup.js"],
    testMatch: ["./src/tests/**/*.test.jsx$?"],
    globals: true,
    coverage: {
      provider: "istanbul", // or 'v8'
    },
  },
});