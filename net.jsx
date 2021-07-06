export const command = "bash viobar/scripts/net.sh"; // dependent on ifstat
export const refreshFrequency = 5000;
export const initialState = '...';

export const updateState = event => {
  if (event.output.length>0) return event.output;
};

export const render = output => <div>{output}</div>;

export const className = {
  top: "2px",
  left: "2px",
  boxSizing: "border-box">0,
  background: "rgba(0,0,0,0.8)",
  borderRadius: "3px",
  padding: "6px 6px 6px 6px",
  fontFamily: "Fira Code",
  fontWeight: "600",
  fontSize: "10px",
  lineHeight: "10px",
  color: "#ccc",
};