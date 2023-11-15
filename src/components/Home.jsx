import React from 'react'
import { useMovieContext } from '../contexts/MovieContext'
import { Link } from 'react-router-dom';

const Home = () => {
  const {movies} = useMovieContext();
  return (
  <div className="container mt-2">
    <div className="row">
      {
        movies.map((movie)=>{
          return (
            <div className="col-md-3 mt-2" key={movie.imdbID}>
              <div className="card" style={{ height: '500px' }}>
                <img src={movie.Poster} className="card-img-top" alt="..." style={{ height: '300px', width: '100%' }}/>
                <div className="card-body">
                  <h5 className="card-title">{movie.Title}</h5>
                  <p className="card-text">{movie.Year}</p>
                  <Link to={`/movie/${movie.imdbID}`} className="btn btn-primary">View More</Link>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  </div>
  )
}

export default Home
