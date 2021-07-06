// this widget is part of Nero -> https://github.com/lucaorio/nero
export const command = 'ESC=`printf "e"`; ps -A -o %mem | awk \'{s+=$1} END {print "" s}\'';
export const refreshFrequency = 10000;
export const initialState = "[MEM]";

export const updateState = event => {
  const memval = parseInt(event.output).toString().padStart(2, "0");
  return `[MEM ${memval}%]`;
};

export const render = output => <div>{output}</div>;

export const className = {
  top: "2px",
  right: "110px",
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