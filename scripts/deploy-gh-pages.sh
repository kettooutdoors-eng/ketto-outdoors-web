#!/usr/bin/env bash
# Builds the site and pushes it to the gh-pages branch for GitHub Pages hosting.
set -euo pipefail

cd "$(dirname "$0")/.."

npm run build
cp dist/index.html dist/404.html
touch dist/.nojekyll

WORKTREE=$(mktemp -d)
trap 'git worktree remove --force "$WORKTREE" 2>/dev/null || true; rm -rf "$WORKTREE"' EXIT

git worktree add -B gh-pages "$WORKTREE" origin/gh-pages 2>/dev/null \
  || git worktree add -B gh-pages "$WORKTREE" --orphan

find "$WORKTREE" -mindepth 1 -maxdepth 1 -not -name '.git' -exec rm -rf {} +
cp -r dist/. "$WORKTREE"/

cd "$WORKTREE"
git add -A
git commit -m "Deploy: $(date -u +%Y-%m-%dT%H:%M:%SZ)" --allow-empty-message -q
git push origin gh-pages

echo "Deployed to gh-pages."
