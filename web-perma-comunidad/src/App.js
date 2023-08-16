import React from 'react';
import {
  Box,
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
import {
  Route,
  Routes
} from 'react-router-dom'
import Landing from './pages/Landing';
import Contacto from './pages/Contacto';



function App() {
  return (
    <ChakraProvider theme={theme}>
      {/* <ColorModeSwitcher/> */}
      <Box >
        <Navbar/>
      </Box>
      <Routes>
        <Route path='/home' element={<Landing/>} />
        <Route path='/contacto' element={<Contacto/>} />



      </Routes>

    </ChakraProvider>
  );
}

export default App;
