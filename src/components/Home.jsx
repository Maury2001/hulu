import React from 'react'
import hulu from '../images/hulu2.jpg'
import d from '../images/D+.png'

const Home = () => {
    return (

        <section className='min-h-screen min-w-full bg-fixed'>


            <div className='w-full h-full'>
                <img className='absolute mix-blend-overlay min-h-screen' src={hulu} />
                <button className='absolute right-0 m-3 bg-transparent'>LOG IN</button>
                <div className='grid grid-cols-1 object-center absolute inset-0 col-span-1 justify-items-center top-56'>
                    <h3 className='text-[#1ce783] text-sm '>BUNDLE WITH ANY HULU PLAN & SAVE</h3>
                    <img className=' w-100 h-40' src={d} />
                    <h2 className='text-xl text-center font-semibold'>Get endless entertainment, live sports, and<br /> the shows and movies you love.</h2>
                    <button className='text-center text-black bg-[#1ce783] py-1 px-20 font-medium hover:text-white hover:border-transparent hover:bg-opacity-25'>GET THE DISNEY BUNDLE</button>
                    <a className=' text-slate-400 text-center underline text-xs hover:cursor-pointer'>What's included?<span className='p-0 no-underline'>See</span>Bundle detail</a>
                    <a className='text-white text-sm hover:cursor-pointer'>Sign up for Hulu only</a>
                </div>
            </div>
        </section>
    )
}

export default Home