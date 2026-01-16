import { join, parse } from '@std/path'

import log from './log.ts'

async function runCommand(
  command: Deno.Command,
): Promise<boolean> {
  try {
    const { success, code, stdout, stderr } = await command.output()

    log.debug(`Code is ${code} (${code === 0 ? 'success' : 'failure'})`, {
      stout: new TextDecoder().decode(stdout),
      stderr: new TextDecoder().decode(stderr),
    })

    return success
  } catch (error) {
    throw new Error(`Error running command: ${error}`)
  }
}

export async function runDenoCheck(
  configFilepath: string,
): Promise<boolean> {
  const parsedConfigFilePath = parse(configFilepath)

  const command = Deno.execPath()
  const args = [
    'check',
    '--config',
    configFilepath,
    join(parsedConfigFilePath.dir, '**/*.ts'),
  ]

  log.debug('Running deno check', command, args)

  const denoCheckCommand = new Deno.Command(command, { args })

  return await runCommand(
    denoCheckCommand,
  )
}

export async function checkHasUncommittedChanges(): Promise<boolean> {
  const gitDiffCommand = new Deno.Command('git', {
    args: ['diff', '--quiet'],
  })

  const success = await runCommand(
    gitDiffCommand,
  )
  // Success means no uncommitted changes
  return !success
}
