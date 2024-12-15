import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
       <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'} />
       </div>

        <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, temporibus architecto perferendis labore consequatur, facilis iusto itaque earum, accusantium! Praesentium  tenetur quidem nulla reiciendis non? Atque est rem culpa!</p>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet temporibus, numquam corrupti consequatur  provident  amet fugiat officia inventore, reiciendis dignissimos corporis. Saepe aliquam dicta facilis consequuntur itaque?</p>
           <b className='text-gray-800'>Our Mission</b>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis incidunt iure magnam dolore laboriosam? In, debitis! Modi vel culpa nobis commodi, provident illo expedita pariatur, ut, quae reprehenderit itaque suscipit.</p>
          </div>
        </div>
        <div className='text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'} />
        </div>
        <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality Assurance : </b>
            <p className='text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, ipsa enim. Ut, nulla. Praesentium, iusto.</p>
          </div>

          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Convenience: </b>
            <p className='text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, ipsa enim. Ut, nulla. Praesentium, iusto.</p>
          </div>

          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Convenience: </b>
            <p className='text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, ipsa enim. Ut, nulla. Praesentium, iusto.</p>
          </div>
        </div>
    </div>
  )
}

export default About
