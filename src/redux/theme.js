import { amber, grey, deepOrange } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const THEME_CONSTANTS = { TOGGLE_THEME: "TOGGLE_THEME" };

const theme = (mode) =>
  createTheme({
    palette: {
      mode,
    //   ...(mode === "light"
    //     ? {
    //         // palette values for light mode
    //         primary: amber,
    //         divider: amber[200],
    //         text: {
    //           primary: grey[900],
    //           secondary: grey[800],
    //         },
    //       }
    //     : {
    //         // palette values for dark mode
    //         primary: deepOrange,
    //         divider: deepOrange[700],
    //         background: {
    //           default: deepOrange[900],
    //           paper: deepOrange[900],
    //         },
    //         text: {
    //           primary: "#fff",
    //           secondary: grey[500],
    //         },
    //       }),
    },
    typography: {
      button: {
        textTransform: "none",
      },
    },
  });

export const themeReducer = (
  state = { theme: theme(localStorage.getItem("theme") ?? "light") },
  action
) => {
  switch (action.type) {
    case THEME_CONSTANTS.TOGGLE_THEME:
      let s = {
        ...state,
        theme: theme(state.theme.palette.mode === "light" ? "dark" : "light"),
      };
      localStorage.setItem("theme", s.theme.palette.mode);
      return s;
    default:
      return state;
  }
};
