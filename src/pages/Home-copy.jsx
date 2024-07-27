import React from 'react'

function Home() {
  return (
    <div className='bg-uniWhite min-h-screen flex mx-auto my-auto gap-2 justify-center'>
      <img src="logo.svg" alt="" className='my-auto' />
      <h1 className="text-3xl font-bold hover:text-uniLight text-uniBlue my-auto">
        Welcome to UniGuide
      </h1>
    </div>
  )
}

export default Home