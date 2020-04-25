// tslint:disable typedef

import * as React from 'react';
import * as styledComponents from 'styled-components';
import { theme, ITheme } from '.';

// https://www.styled-components.com/docs/api#define-a-theme-interface
const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<ITheme>;

export { styled, css, createGlobalStyle, keyframes, ThemeProvider };

export const StyledApp = styled.div`
  display: inline-block;
  width: 100%;
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
`;

export const StyledStory = ({ children } : { children : React.ReactNode }) => (
  <ThemeProvider theme={theme}>
    <StyledApp>{children}</StyledApp>
  </ThemeProvider>
);

// Due to our `typedef` rule, this type is needed as a helper.
// Actually, by using helpers exported above, styled-components-props
// can be calculated automatically by tsc already.
export type WithTheme<P = {}> = styledComponents.ThemedStyledProps<P, ITheme>;
