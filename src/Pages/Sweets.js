import React from 'react'
import SweetsImage from '../Image/sweets.jpg'
import { useNavigate } from 'react-router-dom'

export function Sweets(props) {
    let navigate = useNavigate()

    return (
        <>
            <h1 className='text-danger m-5'>Sweets !!!</h1>
            <img src={SweetsImage} alt="Sweets" />
            <button className='bg-danger mx-4' onClick={() => { navigate('/menulist') }}>Go to the back</button>
        </>
    )
}
