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
import Navbar from './components/Navbar';
// import Header from './components/Navbar';
// import { ColorModeSwitcher } from './ColorModeSwitcher';


function App() {
  return (
    <ChakraProvider theme={theme}>
      HOLI
      {/* <ColorModeSwitcher/> */}
      {/* <Header/> */}
      <Navbar/>
    </ChakraProvider>
  );
}

export default App;
