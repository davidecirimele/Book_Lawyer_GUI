import fonts from "./fonts";
import { colors } from "./dark";

const breakpointValues = {
  xs: 0,
  sm: 596,
  md: 800,
  lg: 1000,
  xl: 1333,
};

/**
 * will remove opacity from rgbaString when backdrop-filter is not supported
 * @param {String} rgbaString should be the rgba string
 * @returns modified rgbaString
 */
export const handleBackdropFilter = rgbaString => {
  const supported = CSS.supports("(-webkit-backdrop-filter: none)") || CSS.supports("(backdrop-filter: none)");
  if (!supported) {
    // make the opacity == 0.9;
    rgbaString = rgbaString.replace(/[\d\.]+\)$/g, "0.9)");
  }
  return rgbaString;
};

const commonSettings = {
  direction: "ltr",
  typography: {
    fontSize: 16,
    fontFamily: "CoHeadline",
    h1: {
      fontSize: "36px",
      fontWeight: 700,
    },
    h2: {
      fontSize: "2.3rem",
      fontWeight: 600,
    },
    h3: {
      fontSize: "28px",
      fontWeight: 400,
    },
    h4: {
      fontSize: "24px",
    },
    h5: {
      fontSize: "1.25rem",
      letterSpacing: "0.4px",
    },
    h6: {
      fontSize: "16px",
      lineHeight: "24px",
    },
    body1: {
      fontSize: "14px",
      fontWeight: 500,
      lineHeight: 1,
    },
    body2: {
      fontSize: "12px",
      fontWeight: 400,
      lineHeight: "24px",
    },
    button: {
      textTransform: "none",
      fontSize: "16px",
    },
  },
  overrides: {
    MuiSvgIcon: {
      root: {
        width: "auto",
        height: "auto",
        marginLeft: 0,
      },
    },
    MuiCssBaseline: {
      "@global": {
        "@font-face": fonts,
        breakpoints: { values: breakpointValues },
        body: {
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        },
      },
    },
    MuiTooltip: {
      popper: {
        backdropFilter: "blur(40px)",
        backgroundColor: "#18232850",
        padding: 0,
        margin: 0,
        borderRadius: "6px",
        border: "0.5px solid rgba(255, 255, 255, 0.2)",
        boxShadow: "0px 20px 20px rgba(0, 0, 0, 0.05)",
      },
      tooltip: {
        fontSize: 10,
        backgroundColor: "transparent",
        borderRadius: "6px",
        padding: "0 1rem",
        // margin: "0 !important",
      },
    },
    MuiButton: {
      startIcon: {
        marginLeft: 0,
      },
      outlinedPrimary: {
        borderRadius: "6px",
      },
      sizeLarge: {
        padding: "16px 64px",
        "& $label": {
          fontSize: "18px",
          lineHeight: "18px",
          fontWeight: 600,
        },
      },
    },
    MuiList: {
      padding: {
        paddingTop: 0,
        paddingBottom: 0,
      },
    },
    MuiOutlinedInput: {
      input: {
        padding: "10px 20px",
      },
      root: {
        width: "100%",
        borderRadius: "6px",
        "&$focused $notchedOutline": {
          borderWidth: 0.5,
        },
      },
      notchedOutline: {
        border: "0.5px solid",
      },
    },
    MuiLink: {
      underlineHover: {
        "&:hover": {
          textDecoration: "none",
        },
      },
    },
    MuiPaper: {
      rounded: {
        borderRadius: "16px",
      },
      elevation1: {
        boxShadow: "0px 20px 20px rgba(0, 0, 0, 0.05)",
      },
    },
    MuiCardContent: {
      root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "13px",
      },
    },
    MuiCardActions: {
      root: {
        padding: "13px",
      },
    },
    MuiTabs: {
      root: {
        display: "flex",
        marginBottom: "25px",
      },
    },
    MuiDivider: {
      root: {
        opacity: "0.2",
      },
    },
    MuiBackdrop: {
      root: {
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        backdropFilter: "blur(60px)",
      },
    },
    MuiTab: {
      wrapper: {
        flexDirection: "row",
        padding: "0 15px 0 0",
      },
      labelIcon: {
        padding: 0,
      },
      root: {
        minWidth: "min-content !important",
        width: "min-content",
        padding: "0px",
        margin: "0px 10px",
        fontWeight: 400,
        fontSize: "16px !important",
        fontStyle: "normal",
        lineHeight: "24px",
      },
    },
  },
  props: {},
};

export default commonSettings;
