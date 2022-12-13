import { createTheme, responsiveFontSizes } from "@mui/material";
import fonts from "./fonts";
import commonSettings from "./global.js";

export const colors = {
  gold: {
    500: "#FFBC45",
    600: "#F0A72C",
    100: "#ffdca8"
  },
  common: {
    white: "#FCFCFC",
    black: "#000"
  },
  dark: {
    600: "#aaa",
    700: "#344750",
    800: "#232E33",
    900: "#182328"
  }
};

export const dark = responsiveFontSizes(
  createTheme(
    {
      primary: {
        main: colors.common.white
      },
      palette: {
        type: "dark",
        background: {
          default: colors.dark[800]
        },
        primary: {
          main: colors.common.white
        },
        text: {
          primary: colors.common.white,
          secondary: colors.gold[500] // `${colors.common.white}80`,  // opacity 0.5
          // gold: colors.gold[500],
        }
      },
      typography: {
        fontFamily: "CoHeadline"
      },
      props: {
        MuiSvgIcon: {
          htmlColor: colors.common.white
        }
      },
      overrides: {
        MuiCssBaseline: {
          "@global": {
            "@font-face": fonts,
            body: {
              // backgroundColor: darkTheme.backgroundColor,
              // background: darkTheme.background,
            }
          }
        },
        MuiDivider: {
          root: {
            backgroundColor: colors.common.white
          }
        },
        MuiLink: {
          root: {
            color: colors.common.white,
            "&:hover": {
              color: colors.gold[500],
              "&.active": {
                color: colors.gold[500]
              }
            },
            "&.active": {
              color: colors.gold[500]
            }
          }
        },
        MuiAppBar: {
          colorPrimary: {
            color: colors.common.white,
            backgroundColor: colors.dark[900]
          }
        },
        MuiOutlinedInput: {
          root: {
            background: "rgba(255, 255, 255, 0.05)",
            "&:hover:not($disabled):not($focused):not($error) $notchedOutline": {
              borderColor: colors.gold[500],
              // Reset on touch devices, it doesn't add specificity
              "@media (hover: none)": {
                borderColor: "rgba(0, 0, 0, 0.23)"
              }
            },
            "&$focused $notchedOutline": {
              borderColor: colors.gold[500]
            }
          },
          notchedOutline: {
            borderColor: "rgba(255, 255, 255, 0.2)"
          }
        },
        MuiButton: {
          // startIcon: {
          //   color: colors.gold[500],  button > span.MuiButton-label > span > svg
          // },
          outlinedPrimary: {
            borderColor: colors.dark[700],
            "&:hover": {
              backgroundColor: colors.dark[700],
              borderColor: colors.dark[700],
              "& #menu": {
                color: colors.gold[500]
              }
            }
            // "&:active": {
            //   backgroundColor: colors.dark[700],
            //   borderColor: colors.dark[700],
            //   "& #menu": {
            //     color: colors.gold[500],
            //   },
            // },
          },
          contained: {
            color: colors.dark[900],
            backgroundColor: colors.gold[500],
            "&:hover": {
              backgroundColor: colors.gold[100]
            },
            "&:active": {
              backgroundColor: colors.gold[100]
            },
            "@media (hover:none)": {
              color: colors.dark[900],
              backgroundColor: colors.gold[500],
              "&:hover": {
                backgroundColor: colors.gold[100]
              }
            }
          },
          textPrimary: {
            "&:hover": {
              color: colors.gold[500],
              backgroundColor: "#00000000"
            }
          }
        },
        PrivateTabIndicator: {
          colorPrimary: {
            backgroundColor: colors.gold[500]
          },
          colorSecondary: {
            backgroundColor: colors.gold[500]
          }
        },
        MuiCardActionArea: {
          root: {
            "&:hover $focusHighlight": {
              opacity: 0
            }
          }
        },
        MuiPaper: {
          root: {
            backgroundColor: colors.dark[900],
            border: "0.5px solid rgba(255, 255, 255, 0.2)",
            backdropFilter: "blur(40px)"
          }
        },
        MuiTab: {
          textColorPrimary: {
            opacity: 1,
            color: colors.common.white,
            "&$selected": {
              color: colors.gold[500],
              "& span.MuiTab-wrapper > svg": {
                color: colors.gold[500]
              }
            }
          }
        }
      }
    },
    commonSettings
  )
);
