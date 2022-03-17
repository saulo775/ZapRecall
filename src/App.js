import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './styles/global';

import { Welcome } from './components/Welcome';

function App() {
  return (
    <>
      <GlobalStyle/>

      <Routes>
        <Route path='/' element={<Welcome/>}/>
      </Routes>
    </>
  );
}

export default App;
