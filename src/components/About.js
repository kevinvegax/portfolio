import React from 'react';
// motion
import { motion } from 'framer-motion';
// variant
import { fadeIn } from '../variants'

const About = () => {

  return ( 
  <section className='section' id='about'>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center
      lg:gap-x-20 lg:gap-y-0 h-screen'>
        <motion.div 
        variants={fadeIn('right', 0.1)}
        initial="hidden"
        whileInView={'show'}
        viewport={{once: false, amount: 0.3}}
        className='flex-1 bg-about bg-contain bg-no-repeat h-[640px]
        mix-blend-lighten bg-top'></motion.div>
        <motion.div 
        variants={fadeIn('left', 0.1)}
        initial="hidden"
        whileInView={'show'}
        viewport={{once: false, amount: 0.3}}
        className='flex-1'>
          <h2 className='h2 text-accent'>About me</h2>
          <h3 className='h3 mb-4'>
            I'm a Freelancer Front-end Developer
          </h3>
        </motion.div>
      </div>
    </div>
  </section>
  );
};

export default About;
