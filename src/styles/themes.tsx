import "styled-components";

interface ITheme {
  colors: IColors;
}

interface IColors {
  background: string;
  text: string;
  hover: string;
  scrollbarBG: string;
  scrollbarFG: string;
  accent: string;
  button: {
    changeModeButton: {
      background: string;
      text: string;
    }
  }

}

export const defaultTheme: ITheme = {
  colors: {
    background: "white",
    text: "#111111",
    hover: "#999999",
    scrollbarBG: "#999999",
    scrollbarFG: "#cdcdcd",
    accent: "teal",
    button: {
      changeModeButton: {
        background: "#cdcdcd",
        text: "#444444",
      }
    }
  },
};

export const darkTheme: ITheme = {
  colors: {
    background: "#111111",
    text: "white",
    hover: "#999999",
    scrollbarBG: "#999999",
    scrollbarFG: "#cdcdcd",
    accent: "teal",
    button: {
      changeModeButton: {
        background: "#444444",
        text: "#cdcdcd",
      }
    }
  },
};
