import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Group components into feature-specific chunks
          "home-components": [
            "./src/components/index/HeroHome.jsx",
            "./src/components/index/ServiceCard.jsx",
            "./src/components/index/Categories.jsx",
          ],
          "anime-films": ["./src/components/index/Anime-Films/Anime.jsx"],
          "khmer-legend": ["./src/components/index/KhmerLegend/khmer.jsx"],
          "feedback-questions": [
            "./src/components/index/Feedback.jsx",
            "./src/components/index/Questions.jsx",
          ],
          // Group large dependencies (if applicable)
          "vendor-react": ["react", "react-dom"],
        },
      },
    },
  },
});
