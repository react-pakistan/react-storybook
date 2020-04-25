import styled, { ThemedStyledProps } from 'styled-components';
import { ITheme } from '../theme';

export const A = styled.a.attrs<IAProps>(({
  href,
  target,
} : IAProps) : IAProps => ({
  href,
  target,
}))<IAProps>`
  color: ${({ color, theme } : ThemedStyledProps<IAProps, ITheme>) : string => color || theme.colors.black};
  text-decoration: none;
`;

export interface IAProps {
  /**
   * Specifies Color of the url label
   * @default theme.colors.black
   */
  color? : string;
  /**
   * Specifies the URL of the page the link goes to
   */
  href : string;
  /**
   * Specifies where to open the linked document
   * @default ''
   */
  target : string;
}
