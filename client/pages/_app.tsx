import React, { FC } from 'react';
import type { AppProps } from 'next/app';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { StepsStyleConfig as Steps } from 'chakra-ui-steps';
import { wrapper } from 'store';

const theme = extendTheme({
  components: {
    Steps
  }
});
const WrappedApp: FC<AppProps> = ({ Component, pageProps }) => (
  <ChakraProvider theme={theme}>
    <Component {...pageProps} />
  </ChakraProvider>
);

export default wrapper.withRedux(WrappedApp);
