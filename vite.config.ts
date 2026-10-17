import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as ts from 'typescript'
import { readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

const keepPolishShortWordsWithNextWord = (text: string) =>
  text.replace(/\b([aiouwz])\s+(?=[\p{L}\p{N}])/giu, '$1\u00a0')

const polishTypography = {
  name: 'polish-typography',
  enforce: 'pre' as const,
  transform(code: string, id: string) {
    if (!id.split('?')[0].endsWith('.tsx')) return null

    const sourceFile = ts.createSourceFile(id, code, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX)
    const replacements: { start: number; end: number; text: string }[] = []

    const visit = (node: ts.Node) => {
      if (ts.isJsxText(node) || ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) {
        const start = node.getStart(sourceFile)
        const end = node.end
        const original = code.slice(start, end)
        const text = keepPolishShortWordsWithNextWord(original)
        if (text !== original) replacements.push({ start, end, text })
      }

      ts.forEachChild(node, visit)
    }

    visit(sourceFile)
    if (replacements.length === 0) return null

    let transformed = code
    for (const replacement of replacements.reverse()) {
      transformed = transformed.slice(0, replacement.start) + replacement.text + transformed.slice(replacement.end)
    }

    return { code: transformed, map: null }
  },
  apply: 'build' as const,
  closeBundle() {
    rmSync(resolve(process.cwd(), 'dist/videos'), { recursive: true, force: true })

    const normalizeHtmlFiles = (directory: string) => {
      for (const entry of readdirSync(directory, { withFileTypes: true })) {
        const filePath = resolve(directory, entry.name)
        if (entry.isDirectory()) {
          normalizeHtmlFiles(filePath)
        } else if (entry.isFile() && entry.name.endsWith('.html')) {
          const html = readFileSync(filePath, 'utf8')
          const normalized = html
            .split(/(<script\b[^>]*>[\s\S]*?<\/script\s*>|<style\b[^>]*>[\s\S]*?<\/style\s*>|<[^>]*>)/gi)
            .map((part) => (part.startsWith('<') ? part : keepPolishShortWordsWithNextWord(part)))
            .join('')

          if (normalized !== html) writeFileSync(filePath, normalized)
        }
      }
    }

    normalizeHtmlFiles(resolve(process.cwd(), 'dist'))
  },
}

export default defineConfig({
  base: '/',
  build: { manifest: true },
  plugins: [polishTypography, react()],
})
