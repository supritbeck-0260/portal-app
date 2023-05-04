import React, { useContext } from 'react'
import { PortalContext } from '../../App'
import Card from '../Card'
import './home.css'
const Home = () => {
const {originalData} = useContext(PortalContext)
  return (
    <div className='home-container'>
        {originalData.map(({id,name})=>
            <Card key={id} name={name} id={id}/>
        )}
    </div>
  )
}

export default Home