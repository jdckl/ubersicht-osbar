#!/bin/sh
pmset -g batt | egrep -o '([0-9]+%).*' | cut -d% -f1