/**
 * Mantine theme configuration file
 * @see https://mantine.dev/theming/theming-context
 */

// 1. Import default theme styles
import { MantineThemeOverride } from '@mantine/core';

// 2. Override default theme styles
const themeConfig: MantineThemeOverride = {
  colorScheme: 'light',
  defaultRadius: 0,
  focusRing: 'auto',
  fontFamily: 'roboto',
  globalStyles: theme => ({
    '.mantine-Modal-title': {
      fontFamily: 'roboto',
      fontWeight: 500,
    },
    '.mantine-Modal-header':{
      marginBottom: 10,
      borderBottom: '1px solid #e3e3e3',
    },
  }),
};

// 3. Export your custom theme
export default themeConfig;
