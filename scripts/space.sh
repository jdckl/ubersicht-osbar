#!/bin/sh
/usr/local/bin/yabai -m query --spaces --space | grep index | sed 's/[^0-9]*//g'