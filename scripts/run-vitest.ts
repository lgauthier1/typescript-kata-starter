import { spawnSync } from 'node:child_process'
import path from 'node:path'

type Mode = 'watch' | 'run'

const mode: Mode = (process.argv[2] as Mode) ?? 'watch'
const kata = process.argv[3]?.trim()

const args = ['vitest']
if (mode === 'run') args.push('--run', '--passWithNoTests')
else args.push('--watch')

// filtre optionnel
if (kata) {
  const pattern = path.join('src', kata, '*.test.ts').split(path.sep).join('/')
  args.push(pattern)
  console.log(`[kata] mode=${mode} | target=${kata} | pattern=${pattern}`)
} else {
  console.log(`[kata] mode=${mode} | target=all`)
}

// éviter que CI=true désactive le watch
const env = { ...process.env }
if (mode === 'watch' && env.CI) delete env.CI

console.log(`[kata] running: npx ${args.join(' ')}`)
const result = spawnSync('npx', ['vitest', ...args], { stdio: 'inherit', env, shell: true })
process.exit(result.status ?? 1)
