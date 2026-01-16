import { parse } from '@std/jsonc'
import { join } from '@std/path'

import type { DenoConfigurationFileSchema } from './deno_config_file_schema.ts'
import log from './log.ts'

const DENO_CONFIG_FILENAMES = ['deno.jsonc', 'deno.json', 'import_map.json']

export async function readDenoConfigFile(basepath: string): Promise<{
  filepath: string
  config: DenoConfigurationFileSchema
}> {
  for (const filename of DENO_CONFIG_FILENAMES) {
    log.debug(`Trying to read deno config file ${filename}`)

    const filepath = join(basepath, filename)

    let content: string
    try {
      content = await Deno.readTextFile(filepath)
      log.debug(`Read ${filepath} successfully`)
    } catch (_error) {
      log.debug(`Failed to read ${filepath}, continuing`)
      continue
    }

    log.debug(`Trying to parse ${filepath}`)

    try {
      const config = parse(content) as DenoConfigurationFileSchema
      log.debug(`Parsed ${filepath} successfully`)

      return {
        filepath,
        config,
      }
    } catch (error) {
      throw new Error(`Failed to parse config of ${filepath}: ${error}`)
    }
  }

  throw new Error(
    `Failed to find Deno config file (looked for ${DENO_CONFIG_FILENAMES})`,
  )
}

export async function writeDenoConfigFile(
  filepath: string,
  config: DenoConfigurationFileSchema,
): Promise<void> {
  log.debug(`Trying to write deno config file ${filepath}`)

  let content: string
  try {
    content = JSON.stringify(config, null, 2)
  } catch (error) {
    throw new Error(`Failed to stringify config for ${filepath}: ${error}`)
  }

  try {
    await Deno.writeTextFile(filepath, content)
  } catch (error) {
    throw new Error(`Failed to write ${filepath}: ${error}`)
  }
}
