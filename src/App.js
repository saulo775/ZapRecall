import { GlobalStyle } from './styles/global';
import React from 'react';

import { Welcome } from './screens/Welcome';
import { Home } from './screens/Home';

function App() {
  return (
    <>
      <GlobalStyle/>
      <main className='container'>
        <Welcome/>
        <Home/>
      </main>
    </>
  );
}

export default App;
