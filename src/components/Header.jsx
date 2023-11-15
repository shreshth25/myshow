import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useMovieContext } from '../contexts/MovieContext'

const Header = () => {
  const {query, setQuery} = useMovieContext();
  const [searchText, setSearchText] = useState('');

  const fetchData = (e)=>{
    e.preventDefault();
    if (searchText==''){
      alert("Search Text cannot be empty")
      return;
    }
    setQuery(searchText)
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">My Show</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
                </li>

            </ul>
            <form className="d-flex" onSubmit={fetchData}>
                <input className="form-control me-2" type="search" placeholder="Search Movie" aria-label="Search" onChange={(e)=> setSearchText(e.target.value)}/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            </div>
        </div>
    </nav>
  )
}

export default Header
