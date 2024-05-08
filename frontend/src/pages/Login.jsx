import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../store/context';
import { toast } from 'react-toastify';

const Login = () => {
  
  const[user ,setUser] = useState({
    email : "",
    password : ""
  });
  
  const navigate = useNavigate();
  const { localStorageToken} = useAuth();

  const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name] : value
        })
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user);

        const response = await fetch(`${window.location.origin}/api/auth/login`,{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify(user),
      });

      if(response.ok){
        const responseData = await response.json();
        console.log(responseData);
        localStorageToken(responseData.token);

        toast("status : "+response.status+" login successfull !");
        setUser({email : "", password : ""})
        navigate('/')
      }

    }

    return (
      <>
        <section>
          <main>
            <div className="">
              <div className="grid grid-cols-12">
                <div className="md:col-span-6 col-span-12">
                  <img src="/images/login.png" alt="register" width="500" height="500" />
                </div>
                <div className="col-span-6">
                  <h1 className='my-10 ml-5 text-start text-4xl font-bold'>Login Form</h1>
                  <br />
  
                  <form className='space-y-5' onSubmit={handleSubmit}>  
                    <div className='flex flex-col justify-evenly space-x-5'>
                        <label htmlFor="email" className='ml-5 text-left'>email</label>
                        <input 
                        className='bg-gray-100 pl-2 rounded-sm h-10 w-96'
                        type="email"
                        name="email"
                        placeholder='email'
                        id='email'
                        required
                        autoComplete='off' 
                        value={user.email} 
                        onChange={handleInput}
                        />
                    </div>
  
                    <div className='flex flex-col justify-evenly space-x-5'>
                        <label htmlFor="username" className='ml-5 text-left'>password</label>
                        <input 
                        className='bg-gray-100 pl-2 rounded-sm h-10 w-96'
                        type="password"
                        name="password"
                        placeholder='password'
                        id='password'
                        required
                        autoComplete='off' 
                        value={user.password} 
                        onChange={handleInput}
                        />
                    </div>
                    <h1 className='text-start ml-5'>I don't have a account<span className='text-blue-500 cursor-pointer font-semibold' onClick={()=>{navigate('/register')}}> Create Account Now </span></h1>
                    <br />
                    <div className='flex space-x-5 ml-5'>
                     <button type='submit' className='justify-start bg-black text-white rounded-md px-5 py-2'> Login </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </main>
        </section>  
      </>
  )
}

export default Login