import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../store/context';

const Regsiter = () => {

  const navigate = useNavigate();
  const {localStorageToken} = useAuth(); //custom hook

  const [user, setUser] = useState({
    username : "",
    email : "", 
    phone : "" , 
    password : ""
  });


  //Taking form input values
  const handleInput = (e) => {
    // console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name] : value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);

    const response = await fetch(`${window.location.origin}/api/auth/register`,{
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

      alert("status : "+response.status+" Registered successfully !");
      setUser({username : "",email : "",phone : "" ,password : ""})
      navigate('/Login')
    }
  }

  return (
    <>
      <section>
        <main>
          <div className="">
            <div className="grid grid-cols-12">
              <div className="md:col-span-6 col-span-12">
                <img src="/images/register.png" alt="register" width="500" height="500" />
              </div>
              <div className="col-span-6">
                <h1 className='my-10 ml-5 text-start text-4xl font-bold'>Registration Form</h1>
                <br />

                <form className='space-y-5' onSubmit={handleSubmit}>
                  <div className='flex flex-col start-0 space-x-5'>
                    <label htmlFor="username" className='ml-5 text-left'>username</label>
                    <input 
                      className='bg-gray-100 pl-2 rounded-sm h-10 w-96'
                      type="text"
                      name="username"
                      placeholder='username'
                      id='username'
                      required
                      autoComplete='off'
                      value={user.username} 
                      onChange={handleInput}
                    />
                  </div>

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

                  <div className='flex flex-col space-x-5'>
                    <label htmlFor="phone" className='ml-5 text-left'>phone</label>
                    <input 
                      className='bg-gray-100 pl-2 rounded-sm h-10 w-96'
                      type="number"
                      name="phone"
                      placeholder='minimum 10 numbers long'
                      id='phone'
                      required
                      autoComplete='off' 
                      value={user.phone} 
                      onChange={handleInput}
                    />
                  </div>

                  <div className='flex flex-col justify-evenly space-x-5'>
                    <label htmlFor="username" className='ml-5 text-left'>password</label>
                    <input 
                      className='bg-gray-100 pl-2 rounded-sm h-10 w-96'
                      type="password"
                      name="password"
                      placeholder='minimum 6 charecters long'
                      id='password'
                      required
                      autoComplete='off' 
                      value={user.password} 
                      onChange={handleInput}
                    />
                  </div>

                  <br />
                  <div className='flex space-x-5 ml-5'>
                    <button type='submit' className='justify-start bg-black text-white rounded-md px-5 py-2'> Register </button>
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

export default Regsiter