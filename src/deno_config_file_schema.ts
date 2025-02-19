/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * A JSON representation of a Deno configuration file.
 */
export interface DenoConfigurationFileSchema {
  /**
   * Instructs the TypeScript compiler how to compile .ts files.
   */
  compilerOptions?: {
    /**
     * Allow JavaScript files to be a part of your program. Use the `checkJS` option to get errors from these files.
     */
    allowJs?: boolean
    /**
     * Disable error reporting for unreachable code.
     */
    allowUnreachableCode?: boolean
    /**
     * Disable error reporting for unused labels.
     */
    allowUnusedLabels?: boolean
    /**
     * Enable error reporting in type-checked JavaScript files.
     */
    checkJs?: boolean
    /**
     * @deprecated
     * Emit design-type metadata for decorated declarations in source files.
     */
    emitDecoratorMetadata?: boolean
    /**
     * Interpret optional property types as written, rather than adding 'undefined'.
     */
    exactOptionalPropertyTypes?: boolean
    /**
     * @deprecated
     * Enable experimental support for legacy experimental decorators.
     */
    experimentalDecorators?: boolean
    /**
     * Require sufficient annotation on exports so other tools can trivially generate declaration files.
     */
    isolatedDeclarations?: boolean
    /**
     * Specify what JSX code is generated.
     */
    jsx?:
      | 'preserve'
      | 'react'
      | 'react-jsx'
      | 'react-jsxdev'
      | 'react-native'
      | 'precompile'
    /**
     * Specify the JSX factory function used when targeting React JSX emit, e.g. 'React.createElement' or 'h'
     */
    jsxFactory?: string
    /**
     * Specify the JSX Fragment reference used for fragments when targeting React JSX emit e.g. 'React.Fragment' or 'Fragment'.
     */
    jsxFragmentFactory?: string
    /**
     * Specify module specifier used to import the JSX factory functions when using jsx: 'react-jsx*'.
     */
    jsxImportSource?: string
    /**
     * Specify module specifier used to import the types for the JSX factory functions when using jsx: 'react-jsx*'. This is the logical equivalent of prefixing an import to the jsxImportSource with `// @deno-types="..."`.
     */
    jsxImportSourceTypes?: string
    /**
     * Specify list of elements that should be exempt from being precompiled when the jsx 'precompile' transform is used.
     */
    jsxPrecompileSkipElements?: string[]
    /**
     * Specify a set of bundled library declaration files that describe the target runtime environment.
     */
    lib?: string[]
    /**
     * Do not truncate error messages.
     */
    noErrorTruncation?: boolean
    /**
     * Enable error reporting for fallthrough cases in switch statements.
     */
    noFallthroughCasesInSwitch?: boolean
    /**
     * Enable error reporting for expressions and declarations with an implied `any` type.
     */
    noImplicitAny?: boolean
    /**
     * Ensure overriding members in derived classes are marked with an override modifier.
     */
    noImplicitOverride?: boolean
    /**
     * Enable error reporting for codepaths that do not explicitly return in a function.
     */
    noImplicitReturns?: boolean
    /**
     * Enable error reporting when `this` is given the type `any`.
     */
    noImplicitThis?: boolean
    /**
     * Enforces using indexed accessors for keys declared using an indexed type.
     */
    noPropertyAccessFromIndexSignature?: boolean
    /**
     * Add `undefined` to a type when accessed using an index.
     */
    noUncheckedIndexedAccess?: boolean
    /**
     * Enable error reporting when a local variables aren't read.
     */
    noUnusedLocals?: boolean
    /**
     * Raise an error when a function parameter isn't read
     */
    noUnusedParameters?: boolean
    /**
     * Enable all strict type checking options.
     */
    strict?: boolean
    /**
     * Check that the arguments for `bind`, `call`, and `apply` methods match the original function.
     */
    strictBindCallApply?: boolean
    /**
     * Built-in iterators are instantiated with a `TReturn` type of undefined instead of `any`.
     */
    strictBuiltinIteratorReturn?: boolean
    /**
     * When assigning functions, check to ensure parameters and the return values are subtype-compatible.
     */
    strictFunctionTypes?: boolean
    /**
     * When type checking, take into account `null` and `undefined`.
     */
    strictNullChecks?: boolean
    /**
     * Check for class properties that are declared but not set in the constructor.
     */
    strictPropertyInitialization?: boolean
    /**
     * Specify type package names to be included without being referenced in a source file.
     */
    types?: string[]
    /**
     * Default catch clause variables as `unknown` instead of `any`.
     */
    useUnknownInCatchVariables?: boolean
    /**
     * Do not transform or elide any imports or exports not marked as type-only, ensuring they are written in the output file's format based on the 'module' setting.
     */
    verbatimModuleSyntax?: boolean
  }
  /**
   * The location of an import map to be used when resolving modules. If an import map is specified as an `--importmap` flag or using "imports" and "scopes" properties, they will override this value.
   */
  importMap?: string
  /**
   * A map of specifiers to their remapped specifiers.
   */
  imports?: {
    /**
     * The key is the specifier or partial specifier to match, with a value that represents the target specifier.
     */
    [k: string]: string
  }
  /**
   * Define a scope which remaps a specifier in only a specified scope
   */
  scopes?: {
    /**
     * A definition of a scoped remapping.
     */
    [k: string]: {
      /**
       * The key is the specifier or partial specifier to match within the referring scope, with a value that represents the target specifier.
       */
      [k: string]: string
    }
  }
  /**
   * List of files, directories or globs that will be ignored by all other configurations. Requires Deno 1.34 or later.
   */
  exclude?: string[]
  /**
   * Configuration for linter
   */
  lint?: {
    /**
     * List of files, directories or globs that will be linted.
     */
    include?: string[]
    /**
     * List of files, directories or globs that will not be linted.
     */
    exclude?: string[]
    rules?: {
      /**
       * List of tag names that will be run. Empty list disables all tags and will only use rules from `include`.
       *
       * @minItems 0
       */
      tags?: ('fresh' | 'jsr' | 'jsx' | 'react' | 'recommended')[]
      /**
       * List of rule names that will be excluded from configured tag sets. If the same rule is in `include` it will be run.
       *
       * @minItems 0
       */
      exclude?: (
        | 'adjacent-overload-signatures'
        | 'ban-ts-comment'
        | 'ban-types'
        | 'ban-unknown-rule-code'
        | 'ban-untagged-ignore'
        | 'ban-untagged-todo'
        | 'ban-unused-ignore'
        | 'camelcase'
        | 'constructor-super'
        | 'default-param-last'
        | 'eqeqeq'
        | 'explicit-function-return-type'
        | 'explicit-module-boundary-types'
        | 'for-direction'
        | 'fresh-handler-export'
        | 'fresh-server-event-handlers'
        | 'getter-return'
        | 'guard-for-in'
        | 'no-array-constructor'
        | 'no-async-promise-executor'
        | 'no-await-in-loop'
        | 'no-await-in-sync-fn'
        | 'no-boolean-literal-for-arguments'
        | 'no-case-declarations'
        | 'no-class-assign'
        | 'no-compare-neg-zero'
        | 'no-cond-assign'
        | 'no-console'
        | 'no-const-assign'
        | 'no-constant-condition'
        | 'no-control-regex'
        | 'no-debugger'
        | 'no-delete-var'
        | 'no-deprecated-deno-api'
        | 'no-dupe-args'
        | 'no-dupe-class-members'
        | 'no-dupe-else-if'
        | 'no-dupe-keys'
        | 'no-duplicate-case'
        | 'no-empty'
        | 'no-empty-character-class'
        | 'no-empty-enum'
        | 'no-empty-interface'
        | 'no-empty-pattern'
        | 'no-eval'
        | 'no-ex-assign'
        | 'no-explicit-any'
        | 'no-external-import'
        | 'no-extra-boolean-cast'
        | 'no-extra-non-null-assertion'
        | 'no-fallthrough'
        | 'no-func-assign'
        | 'no-global-assign'
        | 'no-implicit-declare-namespace-export'
        | 'no-import-assertions'
        | 'no-import-assign'
        | 'no-inferrable-types'
        | 'no-inner-declarations'
        | 'no-invalid-regexp'
        | 'no-invalid-triple-slash-reference'
        | 'no-irregular-whitespace'
        | 'no-misused-new'
        | 'no-namespace'
        | 'no-new-symbol'
        | 'no-node-globals'
        | 'no-non-null-asserted-optional-chain'
        | 'no-non-null-assertion'
        | 'no-obj-calls'
        | 'no-octal'
        | 'no-process-globals'
        | 'no-prototype-builtins'
        | 'no-redeclare'
        | 'no-regex-spaces'
        | 'no-self-assign'
        | 'no-self-compare'
        | 'no-setter-return'
        | 'no-shadow-restricted-names'
        | 'no-sloppy-imports'
        | 'no-slow-types'
        | 'no-sparse-arrays'
        | 'no-sync-fn-in-async-fn'
        | 'no-this-alias'
        | 'no-this-before-super'
        | 'no-throw-literal'
        | 'no-top-level-await'
        | 'no-undef'
        | 'no-unreachable'
        | 'no-unsafe-finally'
        | 'no-unsafe-negation'
        | 'no-unused-labels'
        | 'no-unused-vars'
        | 'no-var'
        | 'no-window'
        | 'no-window-prefix'
        | 'no-with'
        | 'prefer-as-const'
        | 'prefer-ascii'
        | 'prefer-const'
        | 'prefer-namespace-keyword'
        | 'prefer-primordials'
        | 'require-await'
        | 'require-yield'
        | 'single-var-declarator'
        | 'triple-slash-reference'
        | 'use-isnan'
        | 'valid-typeof'
        | 'verbatim-module-syntax'
      )[]
      /**
       * List of rule names that will be run. Even if the same rule is in `exclude` it will be run.
       *
       * @minItems 0
       */
      include?: (
        | 'adjacent-overload-signatures'
        | 'ban-ts-comment'
        | 'ban-types'
        | 'ban-unknown-rule-code'
        | 'ban-untagged-ignore'
        | 'ban-untagged-todo'
        | 'ban-unused-ignore'
        | 'camelcase'
        | 'constructor-super'
        | 'default-param-last'
        | 'eqeqeq'
        | 'explicit-function-return-type'
        | 'explicit-module-boundary-types'
        | 'for-direction'
        | 'fresh-handler-export'
        | 'fresh-server-event-handlers'
        | 'getter-return'
        | 'guard-for-in'
        | 'no-array-constructor'
        | 'no-async-promise-executor'
        | 'no-await-in-loop'
        | 'no-await-in-sync-fn'
        | 'no-boolean-literal-for-arguments'
        | 'no-case-declarations'
        | 'no-class-assign'
        | 'no-compare-neg-zero'
        | 'no-cond-assign'
        | 'no-console'
        | 'no-const-assign'
        | 'no-constant-condition'
        | 'no-control-regex'
        | 'no-debugger'
        | 'no-delete-var'
        | 'no-deprecated-deno-api'
        | 'no-dupe-args'
        | 'no-dupe-class-members'
        | 'no-dupe-else-if'
        | 'no-dupe-keys'
        | 'no-duplicate-case'
        | 'no-empty'
        | 'no-empty-character-class'
        | 'no-empty-enum'
        | 'no-empty-interface'
        | 'no-empty-pattern'
        | 'no-eval'
        | 'no-ex-assign'
        | 'no-explicit-any'
        | 'no-external-import'
        | 'no-extra-boolean-cast'
        | 'no-extra-non-null-assertion'
        | 'no-fallthrough'
        | 'no-func-assign'
        | 'no-global-assign'
        | 'no-implicit-declare-namespace-export'
        | 'no-import-assertions'
        | 'no-import-assign'
        | 'no-inferrable-types'
        | 'no-inner-declarations'
        | 'no-invalid-regexp'
        | 'no-invalid-triple-slash-reference'
        | 'no-irregular-whitespace'
        | 'no-misused-new'
        | 'no-namespace'
        | 'no-new-symbol'
        | 'no-node-globals'
        | 'no-non-null-asserted-optional-chain'
        | 'no-non-null-assertion'
        | 'no-obj-calls'
        | 'no-octal'
        | 'no-process-globals'
        | 'no-prototype-builtins'
        | 'no-redeclare'
        | 'no-regex-spaces'
        | 'no-self-assign'
        | 'no-self-compare'
        | 'no-setter-return'
        | 'no-shadow-restricted-names'
        | 'no-sloppy-imports'
        | 'no-slow-types'
        | 'no-sparse-arrays'
        | 'no-sync-fn-in-async-fn'
        | 'no-this-alias'
        | 'no-this-before-super'
        | 'no-throw-literal'
        | 'no-top-level-await'
        | 'no-undef'
        | 'no-unreachable'
        | 'no-unsafe-finally'
        | 'no-unsafe-negation'
        | 'no-unused-labels'
        | 'no-unused-vars'
        | 'no-var'
        | 'no-window'
        | 'no-window-prefix'
        | 'no-with'
        | 'prefer-as-const'
        | 'prefer-ascii'
        | 'prefer-const'
        | 'prefer-namespace-keyword'
        | 'prefer-primordials'
        | 'require-await'
        | 'require-yield'
        | 'single-var-declarator'
        | 'triple-slash-reference'
        | 'use-isnan'
        | 'valid-typeof'
        | 'verbatim-module-syntax'
      )[]
      [k: string]: unknown
    }
    /**
     * The default report format to use when linting
     */
    report?: 'pretty' | 'json' | 'compact'
    [k: string]: unknown
  }
  /**
   * Configuration for formatter
   */
  fmt?: {
    /**
     * List of files, directories or globs that will be formatted.
     */
    include?: string[]
    /**
     * List of files, directories or globs that will not be formatted.
     */
    exclude?: string[]
    /**
     * Whether to use tabs (true) or spaces (false) for indentation.
     */
    useTabs?: boolean
    /**
     * The width of a line the printer will try to stay under. Note that the printer may exceed this width in certain cases.
     */
    lineWidth?: number
    /**
     * The number of characters for an indent.
     */
    indentWidth?: number
    /**
     * Whether to use single quote (true) or double quote (false) for quotation.
     */
    singleQuote?: boolean
    /**
     * Define how prose should be wrapped in Markdown files.
     */
    proseWrap?: 'always' | 'never' | 'preserve'
    /**
     * Whether to prefer using semicolons.
     */
    semiColons?: boolean
    options?: {
      /**
       * Whether to use tabs (true) or spaces (false) for indentation.
       */
      useTabs?: boolean
      /**
       * The width of a line the printer will try to stay under. Note that the printer may exceed this width in certain cases.
       */
      lineWidth?: number
      /**
       * The number of characters for an indent.
       */
      indentWidth?: number
      /**
       * Whether to use single quote (true) or double quote (false) for quotation.
       */
      singleQuote?: boolean
      /**
       * Define how prose should be wrapped in Markdown files.
       */
      proseWrap?: 'always' | 'never' | 'preserve'
      /**
       * Whether to prefer using semicolons.
       */
      semiColons?: boolean
      [k: string]: unknown
    }
    [k: string]: unknown
  }
  nodeModulesDir?: ('auto' | 'manual' | 'none') | boolean
  /**
   * Enables or disables the use of a local vendor folder as a local cache for remote modules and node_modules folder for npm packages. Alternatively, use the `--vendor` flag or override the config via `--vendor=false`. Requires Deno 1.36.1 or later.
   */
  vendor?: boolean
  /**
   * Configuration for deno task
   */
  tasks?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^[A-Za-z][A-Za-z0-9_\-:]*$".
     */
    [k: string]:
      | string
      | {
        /**
         * Description of a task that will be shown when running `deno task` without a task name
         */
        description?: string
        /**
         * The task to execute
         */
        command?: string
        /**
         * Tasks that should be executed before this task
         */
        dependencies?: string[]
        [k: string]: unknown
      }
  }
  /**
   * Configuration for deno test
   */
  test?: {
    /**
     * List of files, directories or globs that will be searched for tests.
     */
    include?: string[]
    /**
     * List of files, directories or globs that will not be searched for tests.
     */
    exclude?: string[]
    [k: string]: unknown
  }
  /**
   * Configuration for deno publish
   */
  publish?: {
    /**
     * List of files, directories or globs that will be included in the published package.
     */
    include?: string[]
    /**
     * List of files, directories or globs that will be excluded from the published package.
     */
    exclude?: string[]
    [k: string]: unknown
  }
  /**
   * Configuration for deno bench
   */
  bench?: {
    /**
     * List of files, directories or globs that will be searched for benchmarks.
     */
    include?: string[]
    /**
     * List of files, directories or globs that will not be searched for benchmarks.
     */
    exclude?: string[]
    [k: string]: unknown
  }
  /**
   * The SPDX license identifier if this is a JSR package. Specify this or add a license file to the package.
   */
  license?: string
  /**
   * Whether to use a lock file or the path to use for the lock file. Can be overridden by CLI arguments.
   */
  lock?:
    | string
    | boolean
    | {
      /**
       * The path to use for the lock file.
       */
      path?: string
      /**
       * Whether to exit with an error if lock file is out of date.
       */
      frozen?: boolean
      [k: string]: unknown
    }
  /**
   * List of unstable features to enable.
   */
  unstable?: string[]
  /**
   * The name of this JSR package. Must be scoped
   */
  name?: string
  /**
   * The version of this JSR package.
   */
  version?: string
  exports?:
    | string
    | {
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^\.(/.*)?$".
       */
      [k: string]: string
    }
  /**
   * UNSTABLE: List of relative paths to folders containing JSR packages to use local versions of.
   */
  patch?: string[]
  workspace?:
    | string[]
    | {
      /**
       * The members of this workspace.
       */
      members?: string[]
      [k: string]: unknown
    }
  [k: string]: unknown
}
