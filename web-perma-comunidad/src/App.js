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
import Hero from './components/Hero';
// import Header from './components/Navbar';
// import { ColorModeSwitcher } from './ColorModeSwitcher';


function App() {
  return (
    <ChakraProvider theme={theme}>
      {/* <ColorModeSwitcher/> */}
      {/* <Header/> */}
      <Navbar/>
      <Hero/>
    </ChakraProvider>
  );
}

export default App;
