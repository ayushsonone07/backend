import React, { useState } from 'react'
import { LuSend } from "react-icons/lu";

const Contact = () => {
    const[user ,setUser] = useState({
      username : "",
        email : "",
        message : ""
    });

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

      const response = await fetch(`${window.location.origin}/api/contact`,{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify(user),
      });

      console.log(response);
      
      if(response.ok){
        alert("status : "+response.status+" Message sent successfully !");
        setUser({username : "",email : "",message : ""})
      }

    }

    return (
      <>
        <section>
          <main>
            <div className="">
              <div className="grid grid-cols-12">

                <div className="col-span-6">
                  <h1 className='my-10 ml-5 text-start text-4xl font-bold'>Contact Form</h1>
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
  
                    <div className='flex flex-col justify-evenly space-x-5'>
                        <label htmlFor="message" className='ml-5 text-left'>message</label>
                        <input 
                        className='bg-gray-100 pl-2 rounded-sm h-16 w-96'
                        type="message"
                        name="message"
                        placeholder='Write your message'
                        id='message'
                        required
                        autoComplete='off' 
                        value={user.message} 
                        onChange={handleInput}
                        />
                    </div>
  
                    <br />
                    <div className='flex space-x-5 ml-5'>
                     <button type='submit' className='flex justify-start bg-black text-white rounded-md px-5 py-2'> Send <LuSend className='mx-3 my-1' /> </button>
                    </div>
                  </form>
                </div>

                <div className="md:col-span-6 col-span-12">
                  <img src="/images/contact.png" alt="register" width="500" height="500" />
                </div>
              </div>
            </div>
          </main>
        </section>  
      </>
  )
}

export default Contact