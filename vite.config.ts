import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import Pages from "vite-plugin-pages";
// import CSS from "vite-plugin-css";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  build: {
    outDir: "public",
    rollupOptions: {
      external: ["@material-ui/icons/ArrowBack", "@mui/x-data-grid"],
    },
  },

  plugins: [react(), Pages()],
  // plugins: [react(), Pages(), CSS()],
});
