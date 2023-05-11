import React from 'react';

import Image from '../assets/avatar.svg'

import {FaGithub, FaYoutube, FaDribbble} from 'react-icons/fa'

import { TypeAnimation } from 'react-type-animation'

import { motion } from 'framer-motion'
// variants
import { fadeIn } from '../variants'

const Banner = () => {
  return <section className='section' id='home'>
    <div className='container mx-auto'>
      <div>
        <div>
          <h1>Kevin Vega</h1>
          <div className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold 
          uppercase leading-[1]'>
            <span className='mr-4 text-white'>I'm a</span>
            <TypeAnimation sequence={[
              'Developer',
              2000,
              'Engineer',
              2000,
            ]}
            speed={50}
            className='text-accent'
            wrapper='span'
            repeat={Infinity}/>
          </div>
          <p>
            Lorem lorem lorem lorem
          </p>
        </div>
        <div>
          <img src={Image} alt=''/>
        </div>
      </div>
    </div>
  </section>;
};

export default Banner;
