import { defineConfig } from 'vite';
import autoprefixer from 'autoprefixer';

export default () => {
  const SITE = process.env.npm_lifecycle_event ? process.env.npm_lifecycle_event.split(':')[1] : "";
  return defineConfig({
    root: `src/sites/${SITE}/entry`,
    css: {
      postcss: {
        plugins: [autoprefixer({})],
      },
    },
    build: {
      emptyOutDir: true,
      outDir: `../../../../build/${SITE}`,
      rollupOptions: {
        output: {
          entryFileNames: `${SITE}.js`,
          assetFileNames: `${SITE}.[ext]`,
        },
      },
    },
  });
};
