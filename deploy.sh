#!/usr/bin/env bash


./tools/build.sh

aws s3 sync _site/ s3://figgy-website/ --profile figgy-prod --delete