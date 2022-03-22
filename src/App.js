import { GlobalStyle } from './styles/global';

import { Welcome } from './screens/Welcome/Welcome';
import React from 'react';
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
