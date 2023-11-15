import React, { useContext, useEffect, useState } from "react"
const MovieContext = React.createContext()
import {API_URL} from '../helpers/urls'

const MovieContextProvider = ({children}) => {
    const [query, setQuery] = useState('transformers')
    const [movies, setMovies] = useState([])

    const contextValue = {
        movies: movies,
        query: query,
        setQuery: setQuery
    }

    const getMovies = async (API_URL)=>{
        try{
            const res = await fetch(API_URL)
            const data = await res.json()
            if (data.Response === 'True')
            {
                setMovies(data.Search)
            }
        }
        catch(e)
        {
            console.log(e)
        }
    }

    useEffect(()=>{
        getMovies(`${API_URL}&s=${query}`)
    }, [query])
    return <MovieContext.Provider value = {contextValue}>{children}</MovieContext.Provider>
}

const useMovieContext = ()=>{
    return useContext(MovieContext)
}

export { MovieContext, MovieContextProvider, useMovieContext}