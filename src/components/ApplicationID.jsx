import React from 'react'
import {useParams} from 'react-router-dom'

function ApplicationID() {
  const params = useParams()
  const id = params.id
  return (
    <div>{id}</div>
  )
}

export default ApplicationID