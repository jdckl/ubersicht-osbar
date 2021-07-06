#!/bin/sh
ESC=`printf "e"`; ps -A -o %cpu | awk '{s+=$1} END {printf("%.2f",s/8);}'