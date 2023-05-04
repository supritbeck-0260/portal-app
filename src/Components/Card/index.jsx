import React from 'react'
import { Link } from 'react-router-dom'
import './card.css'
const Card = ({name,id}) => {
  return (
    <Link to={`/${id}`}>
    <div className='card'>{name}</div>
    </Link>
  )
}

export default Card