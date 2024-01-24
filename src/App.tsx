import * as React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const App: React.FC = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/"></Route>
          <Route path="/inquiry"></Route>
        </Routes>

    </ BrowserRouter>

  )
};

export default App;
