#!/usr/bin/env bash

function web {
  bunx @openapitools/openapi-generator-cli generate -i ../open-api/spec.json -g typescript -o ../open-api/typescript --skip-validate-spec
  echo "Open Api successfully generated the Typescript Client in open-api folder."
  echo "Installing packages and building."
  cd ../open-api/typescript && bun i
  echo "** After install in package.json if name is not present name it as '@file-server/sdk'. **"
  echo "** And then change 'require' to 'default' inside the package.json for 'exports' property. **"
  echo "** To update the changes if made re-install buy running bun install in web directory. **"
}

if [[ $1 == 'web' ]]; then
  web
fi
