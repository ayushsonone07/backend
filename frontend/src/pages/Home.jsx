import React, { useState } from 'react'
import { LuSend } from "react-icons/lu";

const Home = () => {

    return (
      <>
        <section>
          <main>
            <div className="">
              <div className="grid grid-cols-12">

                <div className="col-span-12 md:col-span-7 content-center">
                  <p className='pt-10 ml-5 text-start font-normal'>i am the creater of this website</p>
                  <h1 className='ml-5 text-start text-5xl font-bold flex'>Welcome To Ayush Sonone</h1>
                  <p className='pt-10 ml-5 text-start font-normal'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, ipsum consequatur nam assumenda facere ipsam ut. Consequuntur, necessitatibus tempora. Aliquid qui ad quaerat possimus corporis blanditiis optio odio, quidem omnis!</p>
                  <br />
                  <div className='ml-5 grid grid-cols-6 space-x-16'>
                    <button className='bg-blue-600 w-32 py-2 px-2 rounded-md text-white mr-7'>Connect now</button>
                    <button className='border-slate-700 w-32 border-solid border-2 py-2 ml-11 rounded-md'>Learn more</button>
                  </div>
                </div>

                <div className="md:col-span-5 col-span-12">
                  <img src="/images/rangoli.png" alt="register" width="400" height="400" className='hover:animate-spin ease-in-out'/>
                </div>
              </div>
            </div>
          </main>
        </section>  

        <section className='grid grid-cols-12 grid-rows-4 gap-2 shadow-2xl rounded-xl content-center md:mt-10 md:h-28 h'>
          <div className='col-span-6 row-span-2 md:col-span-3 p-5'>
            <h1 className='text-4xl font-bold'>50+</h1>
            <p>Registerd companies</p>
          </div>
          <div className='col-span-6 row-span-2 md:col-span-3 p-5'>
            <h1 className='text-4xl font-bold'>100,00+</h1>
            <p>Mappy clones</p>
          </div>
          <div className='col-span-6 row-span-2 md:col-span-3 p-5'> 
            <h1 className='text-4xl font-bold '>500+</h1>
            <p>Well known Developers</p>
          </div>
          <div className='col-span-6 row-span-2 md:col-span-3 p-5'>
            <h1 className='text-4xl font-bold '>24/7</h1>
            <p>Service</p>
          </div>
        </section>

        <section>
          <main>
            <div className="">
              <div className="grid grid-cols-12">
                <div className="md:col-span-6 col-span-12">
                  <img src="/images/meet.png" alt="register" width="400" height="400" className=''/>
                </div>

                <div className="md:col-span-6 col-span-12 content-center">
                  <p className='pt-10 ml-5 text-start font-normal'>i am the creater of this website</p>
                  <h1 className='ml-5 text-start text-5xl font-bold flex'>Welcome To Ayush Sonone</h1>
                  <p className='pt-10 ml-5 text-start font-normal'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, ipsum consequatur nam assumenda facere ipsam ut. Consequuntur, necessitatibus tempora. Aliquid qui ad quaerat possimus corporis blanditiis optio odio, quidem omnis!</p>
                  <br />
                  <div className='ml-5 grid grid-cols-6'>
                    <button className='col-span-3 bg-blue-600 w-64 py-2 rounded-md text-white mr-7'>Let's get started</button>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </section>
      </>
  )
}

export default Home