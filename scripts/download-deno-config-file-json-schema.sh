#!/bin/bash

set -eEuo pipefail

cd deno-config-json-schema
curl --location --remote-name-all https://raw.githubusercontent.com/denoland/deno/refs/heads/main/cli/schemas/{config-file.v1.json,lint-tags.v1.json,lint-rules.v1.json}
