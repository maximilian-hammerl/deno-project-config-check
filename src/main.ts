import { join, parse } from '@std/path'

import { readDenoConfigFile, writeDenoConfigFile } from './deno_config_file.ts'
import { DENO_CONFIG_IMPORTS_TO_CHECK } from './config_fields/imports.ts'
import { DENO_CONFIG_UNSTABLE_TO_CHECK } from './config_fields/unstable.ts'
import { checkHasUncommittedChanges } from './command.ts'
import { checkDenoConfigField } from './config_field.ts'
import log from './log.ts'
import { KEVIN_ARGUMENTS } from './kevin_arguments.ts'
import type { DenoConfigurationFileSchema } from './deno_config_file_schema.ts'

async function processProject(
  filepath: string,
  config: DenoConfigurationFileSchema,
) {
  const parsedFilepath = parse(filepath)
  const testFilepath = join(parsedFilepath.dir, `test.${parsedFilepath.base}`)

  const foundRemovableImportEntries = await checkDenoConfigField(
    DENO_CONFIG_IMPORTS_TO_CHECK,
    testFilepath,
    config,
  )

  const foundRemovableUnstableEntries = await checkDenoConfigField(
    DENO_CONFIG_UNSTABLE_TO_CHECK,
    testFilepath,
    config,
  )

  const foundConfigToRemove = foundRemovableImportEntries ||
    foundRemovableUnstableEntries

  try {
    await Deno.remove(testFilepath)
  } catch (error) {
    if (!(error instanceof Deno.errors.NotFound)) {
      throw error
    }
  }

  if (KEVIN_ARGUMENTS.isOverwriteDenoConfigFileEnabled) {
    if (foundConfigToRemove) {
      console.info(`Found entries to remove, overwriting ${filepath}`)
      await writeDenoConfigFile(filepath, config)
    } else {
      console.info(`Found no entries to remove, not overwriting ${filepath}`)
    }
  } else {
    if (foundConfigToRemove) {
      console.info('Found entries to remove')
    } else {
      console.info('Found no entries to remove')
    }
  }
}

async function main() {
  log.debug('CLI arguments', KEVIN_ARGUMENTS)

  if (KEVIN_ARGUMENTS.isGitEnabled) {
    if ((await checkHasUncommittedChanges())) {
      console.warn(
        'Uncommitted changes found, exiting (check can be disabled with --no-git)',
      )
      return
    }
  }

  const { filepath, config } = await readDenoConfigFile(Deno.cwd())

  if (config.workspace !== undefined) {
    let workspaceMembers: Array<string>
    if (Array.isArray(config.workspace)) {
      workspaceMembers = config.workspace
    } else {
      workspaceMembers = config.workspace.members ?? []
    }

    log.debug(
      'Found workspace config, processing workspace member projects',
      workspaceMembers,
    )
    for (const member of workspaceMembers) {
      const { filepath: memberFilepath, config: memberConfig } =
        await readDenoConfigFile(join(Deno.cwd(), member))
      await processProject(memberFilepath, memberConfig)
    }
  } else {
    await processProject(filepath, config)
  }
}

if (import.meta.main) {
  await main()
}
