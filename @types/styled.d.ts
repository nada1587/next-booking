import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    lightTheme: LightThemeTypes;
    darkTheme: DarkThemeTypes;
    mobile: MobileTypes;
    viewSizes: ViewSizesTypes;
    color: ColorTypes;
    flexBox: FlexBoxTypes;
    fontFamily: FontFamilyTypes;
    textOverflow: TextOverflowTypes;
    imgBox: ImgBoxTypes;
  }
}
