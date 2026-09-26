import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { rmSync } from 'node:fs'
import { resolve } from 'node:path'

const omitPublicVideos = {
  name: 'omit-public-videos',
  apply: 'build' as const,
  closeBundle() {
    rmSync(resolve(process.cwd(), 'dist/videos'), { recursive: true, force: true })
  },
}

export default defineConfig({
  base: '/',
  plugins: [react(), omitPublicVideos],
})