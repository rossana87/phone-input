import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true, // optional, lets you use describe/it/expect without imports
  },
})
