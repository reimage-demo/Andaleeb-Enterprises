#!/bin/bash
# Stages, commits, and pushes all current changes to GitHub.
# Usage: ./publish.sh ["optional commit message"]
set -e

cd "$(dirname "$0")"

if [ -z "$(git remote get-url origin 2>/dev/null)" ]; then
  echo "No 'origin' remote configured yet. Run:"
  echo "  git remote add origin <your-repo-url>"
  exit 1
fi

git add -A

if git diff --cached --quiet; then
  echo "No changes to publish."
  exit 0
fi

MESSAGE="${1:-Update site content}"
git commit -m "$MESSAGE"
git push origin HEAD
