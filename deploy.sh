#!/usr/bin/env sh

set -e

yarn build

cd dist

git init
git add -A 
git commit -m 'New Deployment'
git push -f https://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@github.com/AbayTergeu/gitogram.git master:gh-pages

cd -
