import React from 'react'
import Navbar from '../components/Navbar'
import LatestCard from '../components/LatestCard'
export default function index() {
  return (
    <div>
      <Navbar />
      <div className='flex flex-col md:flex-row md:h-[80vh] md:max-w-7xl w-full px-1 md:px-9 mt-10 md:space-x-5 md:space-y-0 space-y-5 mx-auto '>
        <div className='md:w-1/2'>
          <article
            className="relative overflow-hidden transition hover:shadow-lg h-full hover:shadow-green-200 "
          >
            <img
              alt="Office"
              src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
              className="absolute inset-0 h-full w-full object-cover rounded-lg"
            />

            <div
              className="relative rounded-lg bg-transparent hover:bg-gray-900 hover:bg-opacity-25 transition duration-100 ease-in-out h-full flex flex-col justify-end"
            >
              <div className="p-0 sm:p-6 mb-5">
                <time className="block text-md text-white/90">
                  10 Oct 2022
                </time>

                <a href="#">
                  <h3 className="mt-0.5 text-4xl text-white">
                    How to position your furniture for positivity
                  </h3>
                </a>

                <p className="mt-2 line-clamp-2 text-md/relaxed text-white/95">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                  dolores, possimus pariatur animi temporibus nesciunt praesentium dolore
                </p>
              </div>
            </div>
          </article>
        </div>
        <div className='md:w-1/2 flex flex-col px-10 space-y-5'>
          <h1 className='text-2xl font-bold  md:ml-5'>LATEST ARTICLES</h1>
          <LatestCard />
          <LatestCard />
        </div>
      </div>
    </div>
  )
}
