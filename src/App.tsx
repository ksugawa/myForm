import * as React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from './router';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const App= (): JSX.Element => {

  return (
    <BrowserRouter>
      <Routes>
      {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={<route.component />}
          />
        ))}
      </Routes>
    </ BrowserRouter>

  )
};

export default App;
