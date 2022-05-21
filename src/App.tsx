import React from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <div>Постоянный текст</div>
      <Routes>

        <Route path='/' element={<>/</>} />
        <Route path='/prod' element={<>/prod</>} />


      </Routes>

    </>
  );
}

export default App;
