import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/seo-audit-lite/",
  plugins: [react()],
});
