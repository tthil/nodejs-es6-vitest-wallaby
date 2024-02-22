import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // Add your Vitest configuration here
    globals: true,
    environment: 'node',
  },
});
