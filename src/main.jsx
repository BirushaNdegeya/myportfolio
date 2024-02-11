import React from "react";
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import About from './pages/About';
import ContactMe from './pages/ContactMe';
import NotFound from './pages/NotFound';
import Services from './pages/Services';
import Layout from './components/Layout';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
   return ( 
      <BrowserRouter>
         <Routes>
            <Route element={<Layout />}>
               <Route index element={<Home />} />
               <Route path="/about" element={<About />} />
               <Route path="/contact" element={<ContactMe />} />
               <Route path="/services" element={<Services />} />
            </Route>
            <Route path="*" element={<NotFound />} />
         </Routes>
      </BrowserRouter>
   )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);