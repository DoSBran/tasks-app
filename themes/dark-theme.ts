import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const darkTheme = createTheme({
    palette: {
        mode: "dark",
        secondary:{
          main: '#19857b'
        },
        error: {
          main: red.A400
        }
      },
      components:{
          MuiAppBar:{
            defaultProps:{},
            styleOverrides:{
                root:{
                    backgroundColor: '#4a148c'
                }
            }
          },
          MuiCard:{
            defaultProps:{},
            styleOverrides:{
              root:{
                backgroundColor: '#1D1C1D'
              }
            }
          },
          MuiCardActionArea:{
            defaultProps:{},
            styleOverrides:{
              root:{
                pointerEvents: 'none'
              }
            }
          }
      }
  });