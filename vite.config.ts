import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  // Check if this is a GitHub Actions pull request build
  const isPR = process.env.GITHUB_EVENT_NAME === 'pull_request';
  
  // Extract the PR number (e.g., "refs/pull/12/merge" becomes "12")
  const prNumber = process.env.GITHUB_REF_NAME 
    ? process.env.GITHUB_REF_NAME.split('/')[0] 
    : '';

  // Use the PR path for previews, otherwise fall back to your standard portfolio path
  const baseConfig = isPR ? `/portfolio/pull/${prNumber}/` : '/portfolio/';

  return {
    base: baseConfig, 
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
