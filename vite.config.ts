import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import Pages from "vite-plugin-pages";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "public",
    rollupOptions: {
      external: ["@material-ui/icons/ArrowBack", "@mui/x-data-grid"],
    },
  },

  plugins: [react(), Pages()],
});
