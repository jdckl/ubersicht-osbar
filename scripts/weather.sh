#!/bin/sh
CITY='Prague,CZ'
APIKEY=''

echo $(curl -s --request GET \
     --url "api.openweathermap.org/data/2.5/weather?q=${CITY}&units=metric&appid=${APIKEY}" \
     | /usr/local/bin/jq '[.main.temp,.weather[0].icon]')
