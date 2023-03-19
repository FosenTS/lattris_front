import React from 'react'
import {useNavigate, Router, Link} from 'react-router-dom'


const ApplicationPost = (prop) => {
    const navigate = useNavigate()
    const goAppID = () => {
        navigate(`/posts/${prop.post.id}`)
    }
  return (
    <div className='post'>
        <div className='post__content'>
            <Link to={`application/${prop.post.id}`}>{prop.post.id}</Link>
            <p>{prop.post.Name}</p>
            <strong>{prop.post.StatusHistory[prop.post.StatusHistory.length - 1]}</strong>
        </div>
    </div>
  )
}

export default ApplicationPost