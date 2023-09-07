import { createTheme } from "@mui/material";

export const ligth = createTheme({
    palette: {
        mode: 'dark'
    },
    typography: {
        fontFamily: 'Poppins',
        h2: {
            fontWeight: 600
        }
    },
    components: {
        MuiTable: {
            styleOverrides: {
                root: {
                    marginTop: 40
                }
            }
        }
    }
})