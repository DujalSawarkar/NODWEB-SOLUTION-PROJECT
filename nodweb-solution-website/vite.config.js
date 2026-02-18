import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    // Use the standard react plugin without the custom babel plugin.
    // The `babel-plugin-react-compiler` tries to import a non-exported
    // entry from React (./compiler-runtime) and causes Vite to fail.
    react(),
    tailwindcss(),
  ],
});
