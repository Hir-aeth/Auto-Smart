import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const repo = process.env.GITHUB_REPOSITORY?.split('/')[1];
// user-pages repos (name ends with .github.io) are served from root
const base = !repo || repo.endsWith('.github.io') ? '/' : `/${repo}/`;

export default defineConfig({
  plugins: [react()],
  base,
});
