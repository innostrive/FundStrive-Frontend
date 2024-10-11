import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
});

// export default {
//   server: {
//     proxy: {
//       "/api": {
//         target: "https://fundstrive-backend.onrender.com",
//         changeOrigin: true,
//         rewrite: (path) => path.replace(/^\/api/, ""),
//       },
//     },
//   },
//   plugins: [react()],
// };
