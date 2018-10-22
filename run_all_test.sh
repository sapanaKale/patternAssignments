#! /bin/bash
set -e
./run_test.sh ./src/drawRectangle.js ./test/rectangle_input ./test/rectangle_output
./run_test.sh ./src/drawTriangle.js ./test/triangle_input ./test/triangle_output
./run_test.sh ./src/drawDiamond.js ./test/diamond_input ./test/diamond_output
