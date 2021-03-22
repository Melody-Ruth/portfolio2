import { createMuiTheme } from "@material-ui/core/styles";

const myTheme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
            main: "#613659",
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: "#f7ce5c",
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  spacing: 8,
});

export default myTheme;
