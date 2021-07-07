import { run } from "uebersicht";
import { container, basicBox, separator, weatherIcon } from "./lib/styles";

export const refreshFrequency = 6000;

export const command = async (dispatch) => {
  const [
    app,
    battery,
    cpu,
    memory,
    net,
    space,
    time,
    volume,
    weather
  ] = await Promise.all([
    run("bash ubersicht-osbar/scripts/app.sh"),
    run("bash ubersicht-osbar/scripts/battery.sh"),
    run("bash ubersicht-osbar/scripts/cpu.sh"),
    run("bash ubersicht-osbar/scripts/memory.sh"),
    run("bash ubersicht-osbar/scripts/net.sh"),
    run("bash ubersicht-osbar/scripts/space.sh"),
    run("bash ubersicht-osbar/scripts/time.sh"),
    run("bash ubersicht-osbar/scripts/volume.sh"),
    run("bash ubersicht-osbar/scripts/weather.sh"),
  ]);

  dispatch({
    type: "UPDATE",
    data: {app, battery, cpu, memory, net, space, time, volume, weather},
  });
};

export const initialState = {};
export const updateState = (action, state) => {
  switch (action.type) {
    case "UPDATE":
      return action.data;
    default:
      return state;
  }
};

export const render = (data) => (
  <div className={container}>
    <div className={basicBox.neon}>
      {data.space}
    </div>
    <div className={basicBox.simple}>
      {data.app ? data.app : '--'}
    </div>

      <div className={separator}></div>

    <div className={basicBox.simple}>
      {data.net}
    </div>

    <div className={basicBox.cpu}>
      {data.cpu}%
    </div>

    <div className={basicBox.mem}>
      {data.memory}%
    </div>

    <div className={basicBox.juice}>
      {data.battery}%
    </div>

    <div className={basicBox.weather}>
      <img className={weatherIcon} src={'http://openweathermap.org/img/w/' + JSON.parse(data.weather)[1] + '.png'}></img>
      {Math.trunc(parseFloat(JSON.parse(data.weather)[0]))}°C
    </div>

    <div className={basicBox.dark}>
      {data.time}
    </div>
  </div>
);