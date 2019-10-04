#!/usr/bin/env bash
export NODE_DEBUG=gh-pages
npm i gh-pages
npm run doc:build

if [ -z "$TRAVIS_TAG" ]; then
  echo "it's not a tag build, publishing branch document"
  npm run doc:publish $TRAVIS_BRANCH
  export BRANCH=$(if [ "$TRAVIS_PULL_REQUEST" == "false" ]; then echo $TRAVIS_BRANCH; else echo $TRAVIS_PULL_REQUEST_BRANCH; fi)
  curl -X POST \
    https://api.github.com/repos/crazyfactory/shop-webapp-components/issues/$TRAVIS_PULL_REQUEST/comments \
    -H "authorization: token $GH_TOKEN" \
    -H 'content-type: application/json' \
    -d "{
    \"body\": \"Hi there, the generated documentation has been made available [gh-pages/$BRANCH](https://crazyfactory.github.io/shop-webapp-components/$BRANCH). Don't forget to delete from [gh-pages/](https://github.com/crazyfactory/shop-webapp-components/tree/gh-pages/) branch once this PR is merged!\"
  }"
else
  echo "it's a tag, publishing main document"
  npm run doc:publish
fi
