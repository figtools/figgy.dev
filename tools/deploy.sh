#!/usr/bin/env bash

aws s3 sync _site/ s3://figgy-website/ --delete --exclude "docs/*" --exclude "bottles/*" --exclude "releases/*"