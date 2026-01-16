import type { DenoConfigurationFileSchema } from './deno_config_file_schema.ts'

export type DenoConfigFieldToCheck<
  FileSchemaWithField extends DenoConfigurationFileSchema,
> = {
  field: string
  isCheckFieldEnabled: boolean
  denoConfigFileHasField: (
    config: DenoConfigurationFileSchema,
  ) => config is FileSchemaWithField
  findRemovableEntries: (
    testFilepath: string,
    config: FileSchemaWithField,
  ) => Promise<Array<string>>
  removeRemovableEntries: (
    config: FileSchemaWithField,
    removableEntries: Array<string>,
  ) => void
}

export async function checkDenoConfigField<
  FileSchemaWithField extends DenoConfigurationFileSchema,
>(
  {
    field,
    isCheckFieldEnabled,
    denoConfigFileHasField,
    findRemovableEntries,
    removeRemovableEntries,
  }: DenoConfigFieldToCheck<FileSchemaWithField>,
  testFilepath: string,
  config: DenoConfigurationFileSchema,
): Promise<boolean> {
  if (!isCheckFieldEnabled) {
    console.info(`Checking ${field} field disabled`)
    return false
  }

  if (!denoConfigFileHasField(config)) {
    console.info(`No ${field} field or entries found`)
    return false
  }

  console.info(`Testing removal of ${field} entries`)
  const removableEntries = await findRemovableEntries(
    testFilepath,
    config,
  )

  if (removableEntries.length === 0) {
    console.info(`Found no removable ${field} entries`)
    return false
  }

  console.info(`Found ${removableEntries.length} removable ${field} entries`)
  for (const key of removableEntries) {
    console.info(`  ${key}`)
  }

  removeRemovableEntries(config, removableEntries)
  return true
}
