import React from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Work from './components/Work'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Blog from './pages/Blog';

const router = createBrowserRouter([
  {
    path: "/",
    element: 
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Header />
      <Banner />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>,
  },
  {
    path: "/blog",
    element: 
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Blog />
      <div className='h-[97vh]'></div>
    </div>,
  },
]);


const App = () => {
  return (
    <>
    
      <RouterProvider router={router} />
    </>
  );
};

export default App;
