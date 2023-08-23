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
  // theme,
} from '@chakra-ui/react';
import Navbar from './components/Navbar';
// import Header from './components/Navbar';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
import {theme} from '../src/theme/index.js'

import {
  Route,
  Routes
} from 'react-router-dom'
import Landing from './pages/Landing';
import Contacto from './pages/Contacto';
import SignIn from './pages/auth/SignIn';



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
        <Route path='/signIn' element={<SignIn/>} />



      </Routes>

    </ChakraProvider>
  );
}

export default App;
