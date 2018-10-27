#! /bin/bash

for testfile in test/*Test.js
do
  echo $testfile
  node $testfile
done
