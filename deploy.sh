#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

git init
git add -A
git commit -m 'new deploy'

git push -f git@github.com:Andriy145-sys/my_portfolio.git master:gh-pages

cd -