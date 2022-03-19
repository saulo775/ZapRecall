import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './styles/global';

import { Welcome } from './components/Welcome';

function App() {
  return (
    <>
      <GlobalStyle/>
      <main className='container'>
        <Welcome/>
      </main>
    </>
  );
}

export default App;
