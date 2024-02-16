#!/bin/sh

# Get the current version from package.json
current_version=$(node -p "require('./package.json').version")

# Get the latest published version from npm registry
latest_version=$(npm show @lvckyworld/marina-api version)

# Compare versions
if [ "$current_version" != "$latest_version" ]; then
  echo "Versions are different. Proceeding with publishing..."
  npm publish --access public
else
  echo "Version $current_version is already published. Skipping publishing."
fi
