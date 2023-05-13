import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const Blog = () => {
  return (
    <div className='container mx-auto'>
      <h1
      className='text-[55px] font-bold leading-[1.5] '
      >If you want to learn and be up to date on new development tools, these articles are for you.</h1>
      <TypeAnimation sequence={[
        'Estara disponible pronto',
        2000,
        'Estara disponible pronto',
        2000,
      ]}
      speed={50}
      wrapper='span'
      repeat={Infinity}/>
    </div>
  )
}

export default Blog