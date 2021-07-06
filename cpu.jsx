// this widget is part of Nero -> https://github.com/lucaorio/nero
export const command = 'ESC=`printf "e"`; ps -A -o %cpu | awk \'{s+=$1} END {printf("%.2f",s/8);}\'';
export const refreshFrequency = 5000;
export const initialState = "[CPU]";

export const updateState = event => {
  const cpuval = parseInt(event.output).toString();
  return `[CPU ${cpuval}%]`;
};

export const render = output => <div>{output}</div>;

export const className = {
  top: "2px",
  right: "44px",
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