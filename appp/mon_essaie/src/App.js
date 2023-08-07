import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Routess from './essaie/Routess';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/*' element={ <Routess />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
