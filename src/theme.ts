export interface IColors {
  [key : string] : string;
}

export interface ITheme {
  colors : IColors;
}

export const theme : ITheme = {
  colors: {
    black: '#2E2E2E',
    skyBlue: '#1E90FF',
    white: '#FFFFFF',
  },
};
