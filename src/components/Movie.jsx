import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {API_URL} from '../helpers/urls'

const Movie = () => {
  const {id} = useParams();
  const [movie, setMovie] = useState({})

  const getMovies = async (API_URL)=>{
      try{
          const res = await fetch(API_URL)
          const data = await res.json()
          if (data.Response === 'True')
          {
              setMovie(data)
              console.log(data)
          }
      }
      catch(e)
      {
          console.log(e)
      }
  }

  useEffect(()=>{
      getMovies(`${API_URL}&i=${id}`)
  }, [id])

  return (
    <div className="card mb-3 m-5 p-2">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={movie.Poster} className="img-fluid rounded-start" alt="..."/>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{movie.Title}</h5>
            <p className="card-text">{movie.Plot}</p>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Stats</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Actors</td>
                  <td>{movie.Actors}</td>
                </tr>
                <tr>
                  <td>Awards</td>
                  <td>{movie.Awards}</td>
                </tr>
                <tr>
                  <td>Director</td>
                  <td>{movie.Director}</td>
                </tr>
                <tr>
                  <td>Genre</td>
                  <td>{movie.Genre}</td>
                </tr>
                <tr>
                  <td>Language</td>
                  <td>{movie.Language}</td>
                </tr>
              </tbody>
            </table>
            <p className="card-text"><small className="text-muted">{movie.Released}</small></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Movie
