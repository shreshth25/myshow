import React, { useState } from 'react'
import { useMovieContext } from '../contexts/MovieContext'

const Contact = () => {
  const [email, setEmail] = useState('')
  const [feedback, setFeedback] = useState('')

  const saveFeedback = (e)=>{
    e.preventDefault();
    if(email==''){
      alert("Email is empty")
      return
    }
    if(feedback=='')
    {
      alert("Feedback is empty")
      return
    }
    alert("Thanks! Will Get back to you.")
  }
  return (
    <div className='container p-2 mt-5'>
      <form onSubmit={saveFeedback}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required onChange={(e)=>{setEmail(e.target.value)}}/>
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Please share your queries</label>
          <input type="text" className="form-control" id="exampleInputPassword1" required onChange={(e)=>{setFeedback(e.target.value)}}/>
          <div id="emailHelp" className="form-text">Your queries make us better.</div>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Contact
