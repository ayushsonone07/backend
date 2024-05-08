import React from 'react'
import { useAuth } from '../store/context';

const Services = () => {

  const {services} = useAuth();

  return (
    <div>
        <h1 className='font-bold text-2xl mt-5'>Services</h1>
        <section className='grid grid-cols-12'>
          {
            services.map((curr, index) => {
              const {services, description, price, provider} = curr;
              return (
                <div className='col-span-12 md:col-span-4' key={index}>
                  <img src="/images/home.png" alt="" />
                  <h1 className='font-semibold'>{curr.services}</h1>
                  <p className='text-xs'>{description}</p>
                  <h3 className=''>Price : {price}</h3>
                  <h4>{provider}</h4>
                </div>
              )
            })
          };
        </section>
    </div>
  )
}

export default Services