import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
//componentes
import Navbar from './components/Navbar';
import Footer from './components/Footer';

//paginas
import Home from './pages/Home'
import Films from './pages/Films';
import FilmDetails from './pages/FilmDetails';
import Favoritos from './pages/Favoritos';

function EstructuraPrincipal() {
  return <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
}

function ErrorPage() {
  return <>
    <Navbar />
    <div className='flex items-center justify-center h-screen text-7xl text-white mx-auto text-center'>¡Ups! Parece que algo <br /> ha salido mal.</div>
    <Footer />
  </>
}

const rutas = createBrowserRouter([
  {
    element: <EstructuraPrincipal />,
    errorElement: <ErrorPage />,
    children: [{
      path: '/',
      element: <Home />
    }, {
      path: '/films',
      element: <Films />
    },{
      path: "/filmDetails/:id",
      element: <FilmDetails/>,
      // loader: filmDetailsLoader
    },{
      path: "/favs",
      element: <Favoritos/>,
      // loader: filmDetailsLoader
    }
  ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={rutas} />
  </React.StrictMode>,
)