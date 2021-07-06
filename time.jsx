export const command = "date +'[%b %d - %H:%M]'";
export const refreshFrequency = 30000;
export const initialState = "...";

export const updateState = event => {
  if (event.error) return event.error;
  return event.output;
};

export const render = output => <div>{output}</div>;

export const className = {
  top: "2px",
  right: "calc(50% - 116px)",
  width: "116px",
  boxSizing: "border-box",
  background: "rgba(0,0,0,0.8)",
  borderRadius: "3px",
  padding: "6px 2px 6px 2px",
  fontFamily: "Fira Code",
  fontWeight: "600",
  fontSize: "10px",
  lineHeight: "10px",
  color: "#cccccc",
  textAlign: "center",
};