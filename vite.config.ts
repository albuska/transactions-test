import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/transactions-test/",
  server: {
    open: "/transactions-test/",
    port: 3000,
  },
});
