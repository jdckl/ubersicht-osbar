import { run } from "uebersicht";
import { 
  container, 
  basicBox, 
  separator, 
  weatherIcon, 
  weatherContainer
} from "./lib/styles";

export const refreshFrequency = 5000;

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

    { data.app ? 
      <div className={basicBox.simple}>
        {data.app}
      </div> 
      : 
      ''
    }

      <div className={separator}></div>

    <div className={basicBox.simple}>
      {data.net}
    </div>

    <div className={basicBox.cpu}>
      <span>{parseInt(data.cpu)}</span>
    </div>

    <div className={basicBox.mem}>
      <span>{parseInt(data.memory)}</span>
    </div>

    <div className={basicBox.juice}>
      <span>{data.battery}</span>
    </div>

    <div className={basicBox.weather}>
      {(JSON.parse(data.weather).length > 0 && !isNaN(parseFloat(JSON.parse(data.weather)[0]))) ?
        <div className={weatherContainer}>
          <img className={weatherIcon} src={'http://openweathermap.org/img/w/' + JSON.parse(data.weather)[1] + '.png'} />
          {Math.trunc(parseFloat(JSON.parse(data.weather)[0]))}°
        </div> 
        : 
        <div className={weatherContainer}>
          <span>...</span>
        </div>
      }
    </div>

    <div className={basicBox.dark}>
      {data.time}
    </div>
  </div>
);