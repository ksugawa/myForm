import * as React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './components/ErrorFallback';
import routes from './router';
import './App.css';
import axios from 'axios';


const App = () => {
  const onError = (error: Error, info: { componentStack: string }) => {
    console.log('eeror.message', error.message)
    console.log('info.componentStack:', info.componentStack)
  }
  
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onError={onError}>

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
    </ErrorBoundary>

  );
};

export default App;
