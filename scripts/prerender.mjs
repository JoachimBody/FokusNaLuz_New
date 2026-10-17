import { readFile, writeFile } from 'node:fs/promises'
import { basename, resolve } from 'node:path'
import { createServer } from 'vite'

const rootDirectory = process.cwd()
const outputDirectory = resolve(rootDirectory, 'dist')
const manifest = JSON.parse(await readFile(resolve(outputDirectory, '.vite/manifest.json'), 'utf8'))
const assetPaths = new Map(
  Object.entries(manifest)
    .filter(([, entry]) => entry.file?.startsWith('assets/'))
    .map(([source, entry]) => [basename(source), `/${entry.file}`]),
)
const normalizeShortWords = (text) => text.replace(/\b([aiouwz])\s+(?=[\p{L}\p{N}])/giu, '$1\u00a0')
const normalizeMarkup = (markup) => markup
  .split(/(<[^>]*>)/g)
  .map((part) => {
    if (!part.startsWith('<')) return normalizeShortWords(part)
    return part.replace(/(["'])(.*?)\1/g, (_match, quote, value) => `${quote}${normalizeShortWords(value)}${quote}`)
  })
  .join('')

const vite = await createServer({
  server: { middlewareMode: true },
  appType: 'custom',
})

try {
  const { renderApp } = await vite.ssrLoadModule('/src/entry-server.tsx')
  const renderedApp = normalizeMarkup(renderApp()).replace(/\/src\/assets\/([^"'\s]+)/g, (sourcePath, filename) => {
    return assetPaths.get(basename(filename)) ?? sourcePath
  })

  if (/\/src\/assets\//.test(renderedApp)) {
    throw new Error('Prerender output contains unresolved source asset paths.')
  }

  const htmlPath = resolve(outputDirectory, 'index.html')
  const html = await readFile(htmlPath, 'utf8')
  const rootPlaceholder = '<div id="root"></div>'

  if (!html.includes(rootPlaceholder)) {
    throw new Error('Could not find the React root in dist/index.html.')
  }

  await writeFile(htmlPath, html.replace(rootPlaceholder, `<div id="root">${renderedApp}</div>`))
} finally {
  await vite.close()
}