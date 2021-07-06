#!/bin/sh
/usr/local/bin/yabai -m query --windows --space | /usr/local/bin/jq '.[] | select(.focused==1) | .app' | sed -n 's/"//gp'