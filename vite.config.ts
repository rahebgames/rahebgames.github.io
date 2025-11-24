import { defineConfig } from "vite";

const repoName = process.env.REPO_NAME;
const base = repoName ? `/${repoName}/` : "/";

export default defineConfig({
  base,
  root: "src",
  publicDir: "../public",
  build: {
    outDir: "../dist",
  },
  resolve: {
    dedupe: ["regl"],
    conditions: ["import", "default"],
  },
  optimizeDeps: {
    esbuildOptions: {
      conditions: ["browser", "import", "default"],
    },
  },
});
