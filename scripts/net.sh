#!/bin/sh
echo "↓ $(/usr/local/bin/ifstat -n -z -S 1 1 | awk 'FNR == 3 {print $2}') ↑ $(/usr/local/bin/ifstat -n -z -S 1 1 | awk 'FNR == 3 {print $3}')"