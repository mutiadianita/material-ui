import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './Theme'
import Layout from './layout/Layout';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout/>
    </ThemeProvider>
  );
}

export default App;
