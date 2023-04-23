import type { Styles, GlobalStyleProps } from '@chakra-ui/theme-tools';

const theme = {
  styles: {
    global: (props: GlobalStyleProps) => ({
      'html, body': {
        color: props.colorMode === 'dark' ? 'white' : 'gray.600',
      },
      a: {
        color: props.colorMode === 'dark' ? 'teal.300' : 'teal.500',
      },
    }),
  },
};
export default theme;
