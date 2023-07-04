const margins = {
  sm: ".5rem",
  base: "1rem",
  lg: "2rem",
  xl: "3rem",
};

const paddings = {
  sm: ".5rem",
  base: "1rem",
  lg: "2rem",
  xl: "3rem",
};

const fonts = {
  family: {
    base: `'Noto Sans KR', sans-serif`,
    title: `'NanumSquare', sans-serif`,
  },
  size: {
    sm: "0.9375rem",
    base: "1rem",
    md: "1.125rem",
    lg: "1.25rem",
    xl: "1.375rem",
  },
  title: {
    sm: "1.4rem",
    base: "1rem",
    md: "1.125rem",
    lg: "1.25rem",
    xl: "1.375rem",
  },
  weight: {
    light: 100,
    normal: 400,
    medium: 500,
    bold: 700,
  },
};

const font = {
  basic: { pc: "16px", mo: "13px", family: `"Noto Sans KR", sans-serif` },
  pc: ["16px", "1.125rem", "1.25rem", "1.375rem", "1.5rem"],
  mo: ["13px", "1.0769rem", "1.1538rem", "1.2307rem", "1.3076rem"],
};

const size = {
  mobile: "767px",
  tablet: "768px",
  pc: "1024px",
};
const positionStyled = {
  center: [
    `position: absolute; top: 50%; left: 50%;transform: translate(-50%, -50%);width:100%;height:100%`,
  ],
};

const flexValue = {
  default: `display: -webkit-box;
  display: -moz-box;
  display: flex;
  display: -ms-flexbox;`,
  jutifyBetween: `justify-content: space-between;
  -webkit-box-pack: space-between;
  -ms-flex-pack: space-between;`,
  jutifyCenter: ` justify-content: center;
  -webkit-box-pack: center;
   -ms-flex-pack: center;`,
  jutifyStart: ` justify-content: start;
  -webkit-box-pack: start;
   -ms-flex-pack: start;`,
  jutifyEnd: `    justify-content: end;
  -webkit-box-pack: end;
  -ms-flex-pack: end;`,

  alginStart: ` align-items: start;
  -webkit-box-align: start;
  -ms-flex-align: start;`,

  alginCenter: `    align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;`,

  alginEnd: `    align-items: flex-end;
  -webkit-box-align: end;
  -ms-flex-align: end;`,
  nowrap: `-moz-flex-wrap: nowrap;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;`,
  wrap: `-moz-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;`,
};

const bg = ["#fafafa"];
export const colors = {
  point: "#01d8df ",
  blue: "#096ac5 ",
  blue2: "#2c5be4 ",
  blue3: "#3942be ",
  red: "#ed5669 ",
  green: "#2ace92 ",
  purple: "#8f65fc ",
  orange: "#ff8626",
  error: "#ee0505",
  okay: "#0a62c2",
  kakaoBg: "#fee500",
  kakaoText: "#381e1f",
  naverBg: "#1ec800",
  naverText: "#fff",
  gray: "#666666",
  basic: "#252525",
};

const theme = {
  bg_1: bg[0],
  color_bs: colors.basic,
  color_error: colors.error,
  color_okay: colors.okay,
  color_point: colors.point,
  color_green: colors.green,
  color_orange: colors.orange,
  color_gray: colors.gray,
  color_blue: colors.blue,
  color_blue2: colors.blue2,
  color_blue3: colors.blue3,
  kakaoBg: colors.kakaoBg,
  kakaoText: colors.kakaoText,
  naverBg: colors.naverBg,
  naverText: colors.naverText,
  input_border: "#dbdbdb",
  input_padding: "0 12px",
  radioWdith: "20px",
  radioInWdith: "12px",
  chk_w2: "20px",
  bs_font_family: font.family,
  fontBold: `font-weight: ${fonts.weight.bold}`,
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
  desktop: `(min-width: ${size.desktop})`,
  positionCenter: `${positionStyled.center}`,
  flex: flexValue.default,
  flexBC: flexValue.default + flexValue.jutifyBetween + flexValue.alginCenter,
  flexCC: flexValue.default + flexValue.jutifyCenter + flexValue.alginCenter,
  flexEC: flexValue.default + flexValue.jutifyEnd + flexValue.alginCenter,
  flexSC: flexValue.default + flexValue.jutifyStart + flexValue.alginCenter,
  flexBS: flexValue.default + flexValue.jutifyBetween + flexValue.alginStart,
  flexCS: flexValue.default + flexValue.jutifyBetween + flexValue.alginStart,
  flexES: flexValue.default + flexValue.jutifyEnd + flexValue.alginStart,
  flexSS: flexValue.default + flexValue.jutifyStart + flexValue.alginStart,
  flexBE: flexValue.default + flexValue.jutifyBetween + flexValue.alginEnd,
  flexCE: flexValue.default + flexValue.jutifyCenter + flexValue.alginEnd,
  flexEE: flexValue.default + flexValue.jutifyEnd + flexValue.alginEnd,
  flexSE: flexValue.default + flexValue.jutifyStart + flexValue.alginEnd,
  flexNowrap: flexValue.nowrap,
  flexWrap: flexValue.wrap,
  fontFamily: `"Noto Sans KR", sans-serif`,
  fontBasic: `font-size: ${font.basic.pc}`,
  fontBasicMo: `font-size: ${font.basic.mo}`,
  font1: `font-size: ${font.pc[0]}`,
  font2: `font-size: ${font.pc[1]}`,
  font3: `font-size: ${font.pc[2]}`,
  font4: `font-size: ${font.pc[3]}`,
  font5: `font-size: ${font.pc[4]}`,
  mo: {
    font1: `font-size: ${font.mo[0]}`,
    font2: `font-size: ${font.mo[1]}`,
    font3: `font-size: ${font.mo[2]}`,
    font4: `font-size: ${font.mo[3]}`,
    font5: `font-size: ${font.mo[4]}`,
  },
};

export default theme;
