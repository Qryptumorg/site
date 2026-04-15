import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

const basePath = process.env.BASE_PATH ?? "/";

export default defineConfig({
  base: basePath,
  plugins: [
    react(),
    tailwindcss(),
    {
      name: "rewrite-public-paths-for-base",
      generateBundle(_, bundle) {
        if (!basePath || basePath === "/") return;
        const p = basePath.endsWith("/") ? basePath : basePath + "/";
        for (const chunk of Object.values(bundle)) {
          if (chunk.type !== "chunk") continue;
          chunk.code = chunk.code
            .replaceAll('"/images/', '"' + p + 'images/')
            .replaceAll("'/images/", "'" + p + "images/")
            .replaceAll('"/qryptum-', '"' + p + 'qryptum-')
            .replaceAll("'/qryptum-", "'" + p + "qryptum-")
            .replaceAll("(/images/", "(" + p + "images/");
        }
      },
    },
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
    },
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
    target: "esnext",
  },
  server: {
    port: Number(process.env.PORT ?? 5173),
    host: "0.0.0.0",
    allowedHosts: true,
  },
  preview: {
    port: Number(process.env.PORT ?? 4173),
    host: "0.0.0.0",
    allowedHosts: true,
  },
});
