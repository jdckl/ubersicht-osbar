#!/bin/sh
ESC=`printf "e"`; ps -A -o %mem | awk '{s+=$1} END {print "" s}'