import React from 'react'

export default function alert(props) {
  return (
    <div className="alert alert-warning alert-dismissible fade show" role="alert">
    <strong>{props.message}</strong>
    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
    
  )
}
