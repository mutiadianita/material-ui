import { createTheme } from "@material-ui/core/styles";

const customBlue = "#28A9EA";
const customPink = "#EA1D54";
const customBackground = "#f8f9fe";

export default createTheme({
    palette: {
        common: {
            blue: `${customBlue}`,
            backgroundColor: `${customBackground}`,
            pink: `${customPink}`
        },
        primary: {
            main: `${customBlue}`
        },
        pink: {
            main: `${customPink}`
        },
    },

    typography: {
        fontFamily: "'Rubik', sans-serif"
    },
})