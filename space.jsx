export const command = "/usr/local/bin/yabai -m query --spaces --space | grep index | sed 's/[^0-9]*//g'";

export const refreshFrequency = 1000;
export const initialState = "[VOL]";

export const updateState = event => {
  return `[DESK ${event.output.trim()}]`;
};

export const render = output => <div>{output}</div>;

export const className = {
  top: "2px",
  left: "191px",
  boxSizing: "border-box",
  background: "rgba(0,0,0,0.8)",
  borderRadius: "3px",
  padding: "6px 6px 6px 6px",
  fontFamily: "Fira Code",
  fontWeight: "600",
  fontSize: "10px",
  lineHeight: "10px",
  color: "#ccc",
};