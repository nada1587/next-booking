import { DefaultTheme } from 'styled-components';

const lightTheme = {
  bgColor: '#fff',
  menuColor: 'blueviolet',
  textColor: '#000',
  shadowColor: 'rgba(0, 0, 0, 0.15)',
  name: 'light',
};

const darkTheme = {
  bgColor: '#252525',
  menuColor: '#D391FA',
  textColor: '#fff',
  shadowColor: '#000',
  name: 'dark',
};

// Notch
const mobile = {
  notchHeight: 0,
};

// View Sizes
const viewSizes = {
  desktop_1: 1919,
  desktop_2: 1599,
  desktop_3: 1365,
  desktop_4: 1023,
  tablet: 600,
  mobile: 374,
};

// Fonts
const font = {
  kr: 'Noto Sans KR',
  en: 'Sofia Sans',
};

// Colors
const color = {
  mark: '#5E9FF8', // 파랑색
  warning: '#f55555', // 빨강색

  textPrimary: '#333', // 진회색 (텍스트 기본 컬러 #000)
  textSecondary: '#666', // 중간 회색
  textTertiary: '#808080', // 회색
  textQuaternary: '#80939f', // 연회색

  bgPrimary: '#00263E', // 면 영역 남색
  bgSecondary: '#335165', // 면 영역 연남색
  bgTertiary: '#99a8b2', // 면 영역 회파랑
  bgQuaternary: '#f4f4f5', // 면 영역 회색
  bgActivePrimary: '#E8F2FE', // 활성화 시 면 영역 하늘색

  linePrimary: '#d2d2dc', // 리스트 보더, 버튼 라인 회색
  lineSecondary: '#335165', // 타이틀 라인 남색
  lineTertiary: '#ccc', // 서브 타이틀 라인 회색
  lineActivePrimary: '#5E9FF8', // 활성화 시 보더 파랑
};

// Flex
// direction : row(default) | row-reverse | column | column-reverse
// justify : flex-start | flex-end | center | space-between(default) | space-around
// align : flex-start | flex-end | center(default) | baseline | stretch
// wrap : nowrap(default) | wrap | wrap-reverse
const flexBox = {
  flexMixin: (
    direction = 'row',
    justify = 'space-between',
    align = 'center',
    wrap = 'nowrap',
  ) => `
    display: flex;
    flex-wrap: ${wrap};
    flex-direction: ${direction};
    align-items: ${align};
    justify-content: ${justify};
    `,
  inlineFlex: (
    justify = 'space-between',
    align = 'center',
    wrap = 'nowrap',
  ) => `
    display: inline-flex;
    flex-wrap: ${wrap};
    align-items: ${align};
    justify-content: ${justify};
  `,
};

// Font
// thin(100), ultralight(200), light(300), regular(400)
// medium(500), semibold(600), bold(700), extrabold(800), heavy(900)
const fontFamily = {
  appleGothicNeo: (string = 'regular', num = 400) => `
    font-family: AppleSDGothicNeo-${string};
    font-weight: ${num}
  `,
};

// Text
const textOverflow = {
  singleLine: () => `
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  `,
  multiLine: (line = 2) => `
    display: -webkit-box;
    white-space: normal;
    overflow: hidden;
    -webkit-line-clamp: ${line};
    -webkit-box-orient: vertical;
  `,
};

// ImgBox
const imgBox = {
  coverBox: () => `
  overflow: hidden;
  position: relative;
  display: inline-block;
  width: 100%;
  padding-top: 100%;
  > img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    display: inline-block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  `,
};

export const theme: DefaultTheme = {
  lightTheme,
  darkTheme,
  font,
  mobile,
  viewSizes,
  color,
  flexBox,
  fontFamily,
  textOverflow,
  imgBox,
};

export type Theme = typeof theme;
