import React from 'react';
import {
  ChakraProvider,
  // Box,
  // Text,
  // Link,
  // VStack,
  // Code,
  // Grid,
  theme,
} from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';


function App() {
  return (
    <ChakraProvider theme={theme}>
      HOLI
      {/* <ColorModeSwitcher/> */}
    </ChakraProvider>
  );
}

export default App;
