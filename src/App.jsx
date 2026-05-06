import { createPortal } from "react-dom"
//import "./App.css"
import React, {  startTransition, useState, useEffect, useContext, createContext, useRef, useReducer, useMemo, useCallback} from 'react'
import { BrowserRouter,Routes,Route,Link, Outlet, NavLink, useParams } from "react-router-dom"
import { useTransition } from "react"
import Home from "./pages/Home.jsx"
import Favourites from './pages/Favourites.jsx'
import FavouritesProvider from "./context/FavouritesContext.jsx"
import Navigator from "./components/Navigator.jsx"
import MovieDetails from "./pages/MovieDetails.jsx"

function App(){
  return (
    <BrowserRouter >
    <Navigator/>
    <FavouritesProvider>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Favourites' element={<Favourites/>}/>
        <Route path='/movie/:id' element={<MovieDetails/>}/>
      </Routes>
    </FavouritesProvider>
    
    </BrowserRouter>
  )

}

export default App