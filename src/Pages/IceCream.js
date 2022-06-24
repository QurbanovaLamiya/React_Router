import React from 'react'
import icecream from '../Image/icecream.jpg'
import { useNavigate } from 'react-router-dom'

export function IceCream(props) {

    let navigate = useNavigate()
    return (
        <>
            <h1 className='text-info  m-5'>IceCream !!!</h1>
            <img src={icecream} alt='IceCream' />
            <button className='bg-info mx-4' onClick={() => { navigate('/menulist') }}>Go to the back</button>
        </>
    )
}
