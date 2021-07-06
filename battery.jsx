export const command = "pmset -g batt | egrep -o '([0-9]+%).*' | cut -d% -f1";
export const refreshFrequency = 60000;
export const initialState = "...";

export const updateState = event => {
  const batteryval = parseInt(event.output).toString().padStart(2, "0");
  return `${batteryval}%`;
};

export const render = output => <div>{output}</div>;

export const className = {
  top: "2px",
  right: "2px",
  boxSizing: "border-box",
  padding: "6px 6px 6px 6px",
  background: "rgba(0,0,0,0.8)",
  borderRadius: "3px",
  fontFamily: "Fira Code",
  fontWeight: "600",
  fontSize: "10px",
  lineHeight: "10px",
  color: "#cccccc",
};