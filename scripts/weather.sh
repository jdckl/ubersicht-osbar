#!/bin/sh
CITY='Prague,CZ'
APIKEY='4f75c0af3c70963adad7a05f811994a9'

echo $(curl -s --request GET \
     --url "api.openweathermap.org/data/2.5/weather?q=${CITY}&units=metric&appid=${APIKEY}" \
     | /usr/local/bin/jq '[.main.temp,.weather[0].icon]')