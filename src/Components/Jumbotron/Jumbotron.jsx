import React from 'react'

const Jumbotron = () => {
  return (
    <section className="bg-gray-800 text-white py-20">
    <div className="container mx-auto text-center">
    <div className='relative flex items-center justify-center mb-4'>
        <h1 className="text-4xl font-bold mb-4 text-[72px]">Futuristic Living</h1>
        <h1 className="text-4xl font-bold mb-4 absolute border-green-400 top-[3px] text-[73px] ">Futuristic Living</h1>
        </div>
    <div className='relative flex items-center justify-center'>
        <h1 className="text-4xl font-bold mb-4 text-[72px]">With Technologi</h1>
        <h1 className="text-4xl font-bold mb-4 absolute border border-green-400 top-[3px] text-[73px] ">With Technologi</h1>
        </div>

      {/* <h1 className="text-4xl font-bold mb-4"i</h1> */}
      <p className="text-lg mb-8">
        Whether a mobile, desktop or web application, we will design, build
        and maintain everything according to your vision
      </p>
    </div>
  </section>
  )
}

export default Jumbotron