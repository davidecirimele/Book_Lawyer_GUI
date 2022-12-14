// import CoHeadlineLightWOFF from "../styles/fonts/CoHeadlineCorp-Light.woff";
// import CoHeadlineRegularWOFF from "../styles/fonts/CoHeadlineCorp-Regular.woff";
// import CoHeadlineBoltWOFF from "../styles/fonts/CoHeadlineCorp-Bold.woff";

const coHeadlineLight = {
  fontFamily: "CoHeadline",
  fontStyle: "light",
  fontDisplay: "swap",
  fontWeight: 300,
  // src: `
  // 	local('CoHeadlineCorp-Light'),
  // 	local('CoHeadlineCorp-Light'),
  // 	url(${CoHeadlineLightWOFF}) format('woff')
  // `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF"
};

const coHeadline = {
  fontFamily: "CoHeadline",
  fontStyle: "regular",
  fontDisplay: "swap",
  fontWeight: 400,
  // src: `
  // 	local('CoHeadlineCorp-Regular'),
  // 	local('CoHeadlineCorp-Regular'),
  // 	url(${CoHeadlineRegularWOFF}) format('woff')
  // `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF"
};

const coHeadlineBold = {
  fontFamily: "CoHeadline",
  fontStyle: "bold",
  fontDisplay: "swap",
  fontWeight: 700,
  // src: `
  // 	local('CoHeadlineCorp-Bold'),
  // 	local('CoHeadlineCorp-Bold'),
  // 	url(${CoHeadlineBoltWOFF}) format('woff')
  // `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF"
};

const fonts = [coHeadlineLight, coHeadline, coHeadlineBold];

export default fonts;
