import { run } from "uebersicht";
import { container, basicBox, separator, volume } from "./lib/styles";

export const refreshFrequency = 5500;

export const command = async (dispatch) => {
  const [
    app,
    battery,
    cpu,
    memory,
    net,
    space,
    time,
    volume
  ] = await Promise.all([
    run("bash viobar/scripts/app.sh"),
    run("bash viobar/scripts/battery.sh"),
    run("bash viobar/scripts/cpu.sh"),
    run("bash viobar/scripts/memory.sh"),
    run("bash viobar/scripts/net.sh"),
    run("bash viobar/scripts/space.sh"),
    run("bash viobar/scripts/time.sh"),
    run("bash viobar/scripts/volume.sh"),
  ]);

  dispatch({
    type: "UPDATE",
    data: {app, battery, cpu, memory, net, space, time, volume},
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

    <div className={basicBox.dark}>
      {data.time}
    </div>
  </div>
);