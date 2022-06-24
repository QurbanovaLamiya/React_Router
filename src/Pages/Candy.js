import React from 'react'
import CandyImg from '../Image/candy.jpg'
import { useNavigate } from 'react-router-dom'

export function Candy(props) {
    let navigate = useNavigate()

    return (
        <>
            <h1 className='text-warning  m-5'>Candy!!!</h1>
            <img src={CandyImg} alt="Candy" />
            <button className='bg-warning mx-4' onClick={() => { navigate('/menulist') }}>Go to the back</button>
        </>
    )
}
