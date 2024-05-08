import React from 'react'
import { useAuth } from '../store/context'

const About = () => {
  const { user } = useAuth();
  return (
    <div>
        <h1 className='text-start font-bold text-2xl mt-5'>Hi, {user?user.username:"user"} </h1>
    </div>
  )
}

export default About