export const command = "osascript -e 'set ovol to output volume of (get volume settings)'";

export const refreshFrequency = 60000;
export const initialState = "[VOL]";

export const updateState = event => {
  const volval = parseInt(event.output).toString();
  return `[VOL 100%]`;
};

export const render = output => <div>{output}</div>;

export const className = {
  top: "2px",
  left: "112px",
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