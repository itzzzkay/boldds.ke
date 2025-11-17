import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/boldds.ke/",     // 👈 EXACTLY your repo name
  plugins: [react()],
});
