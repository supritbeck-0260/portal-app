import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { PortalContext } from '../../App'

const Details = () => {
const {id} = useParams()
const {portalData} = useContext(PortalContext)
const {name,userName,number} = portalData[id] || {}
  return (
      <>
    <h1>Welcome Page</h1>
    <h2>App name: {name} </h2>
     <h3>Hello {userName}</h3>
     <h4>Mob: {number}</h4>
    </>
  )
}

export default Details