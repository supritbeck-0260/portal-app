import React, {useContext, useState} from 'react'
import { useParams } from 'react-router';
import {useNavigate} from 'react-router-dom'
import { PortalContext } from '../../App';
import './form.css'
const Form = () => {
const {setPortalData,originalData} = useContext(PortalContext)
const navigate = useNavigate()
const {id} = useParams()
const {name} = originalData.find(item=>item.id ==id) || {}
const [userName,setUserName] = useState('')
const [number,setNumber] = useState('')
const onClickHandler = ()=>{
    if(!number || !userName) return alert('Please enter values')
    const findElement = originalData.find(item=>item.id == id)
    setPortalData(prev=>({...prev, [id]:{...findElement,number,userName}}))
    navigate(`/${id}/details`)
}
const numberChangeHandler = (e)=>{
    const re = /^[0-9\b]+$/;
const {value} = e.target || {}

    if (value === '' || re.test(value)) {
       setNumber(value)
    }
}
  return (
      <>
    <div className='form'>{name} Form </div>
    <br/>
    <input className='form' type='text' placeholder='Enter user name' required value={userName} onChange={(e)=>setUserName(e.target.value)}/>
    <br/>
    <input className='form' type='text' placeholder='Enter Phone number' value={number} pattern = "[0-9]" onChange={numberChangeHandler}/>
    <br/>
    <button className='form' type='submit' onClick={onClickHandler}>Submit</button>
    </>
  )
}

export default Form