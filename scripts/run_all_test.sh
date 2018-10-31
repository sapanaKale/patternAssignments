#! /bin/bash
set -e
./scripts/run_test.sh ./createRectangle.js ./appTestData/rectangle_input ./appTestData/rectangle_output
./scripts/run_test.sh ./createTriangle.js ./appTestData/triangle_input ./appTestData/triangle_output
./scripts/run_test.sh ./createDiamond.js ./appTestData/diamond_input ./appTestData/diamond_output
./scripts/run_test.sh ./createPattern.js ./appTestData/pattern_input ./appTestData/pattern_output
