import { css } from "uebersicht";

export const container = css({
  position: "relative",
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  top: "calc(100vh - 28px)",
  left: 4,
  height: "24px",
  width: "calc(100vw - 8px)",
  backgroundColor: "rgba(0,0,0,0.6)",
  backdropFilter: "blur(5px)",
  color: "#fff",
  borderRadius: "6px",
  fontFamily: "Fira Code",
  fontWeight: 400,
  fontSize: "13px",
  boxShadow: "1px 4px 8px 0 rgba(0,0,0,0.2)",
  "& :first-child": {
    borderRadius: "6px 0 0 6px"
  },
  "& :last-child": {
    borderRadius: "0 6px 6px 0"
  }
});

const flexBox = {
  display: "flex",
  alignItems: "center",
  padding: "0 15px",
  height: "100%"
};

export const separator = css({
  flexGrow: 1,
  width: "1px",
  backgroundColor: "rgba(0,0,0,.2)",
  height: "100%"
});

export const weatherIcon = css({
  height: "24px",
  marginRight: "3px",
  marginTop: "2px",
  marginLeft: "-5px"
});

export const basicBox = {
  simple: css({
    ...flexBox
  }),
  neon: css({
    ...flexBox,
    backgroundColor: "rgba(237, 71, 221, .8)"
  }),
  mem: css({
    ...flexBox,
    backgroundColor: "rgba(252, 234, 98, .8)"
  }),
  cpu: css({
    ...flexBox,
    backgroundColor: "rgba(98, 229, 252, .8)"
  }),
  dark: css({
    ...flexBox,
    backgroundColor: "#222"
  }),
  juice: css({
    ...flexBox,
    backgroundColor: "rgba(89, 255, 142, .6)"
  }),
  weather: css({
    ...flexBox,
    backgroundColor: "rgba(114, 79, 255, .2)"
  })
}

const volumeBase = css({
  display: "flex",
  width: "20px",
  border: "1px solid red",
  backgroundColor: "#333"
})

export const volume = {
  max: css({
    ...volumeBase,
    ":after": {
      "content": "a",
      backgroundColor: "#000",
      height: "50%",
      width: "100%",
      position: "absolute",
      left: 0,
      bottom: 0
    }
  })
}