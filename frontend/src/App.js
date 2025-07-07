import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/homepage';
import Login from './components/loginpage';
import Listings from './pages/listingpage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/listings" element={<Listings />} />
      </Routes>
    </Router>
  );
}

export default App;
// This is the main entry point of the application.
// It sets up the router and defines the routes for the application.
// The Home, Login, and Listings components are imported and rendered based on the current URL path.
// The <Router> component wraps the entire application to enable routing functionality.
// The <Routes> component contains individual <Route> components that map paths to their respective components.
// The `element` prop of each <Route> specifies which component to render when the path matches.
// The `path` prop defines the URL path that triggers the rendering of the specified component. 