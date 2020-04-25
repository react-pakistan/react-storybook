import { text } from '@storybook/addon-knobs';
import { IAProps, theme } from '..';

export const aProps = () : IAProps => ({
  color: text('color', theme.colors.black),
  href: text('href', 'https://google.com'),
  target: text('target', '_blank'),
});
