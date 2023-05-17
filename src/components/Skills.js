import React from 'react';

import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

const services = [
  {
    name: 'Frontend',
    description: 'Javascript | Typescript | React | Redux | Axios | Tailwind',
  },
  {
    name: 'Backend',
    description: 'Nodejs | Express | MongoDB | SQLServer | AWS - EC2',
  },
  {
    name: 'Testing',
    description: 'WDIO | Jasmine | Test Cases | CI/CD',
  },
  {
    name: 'Soft Skills',
    description: 'Motivated | Research | Creativity | Team-building | Decision-making | Friendliness',
  }, 
  {
    name: 'Others',
    description: 'Advanced English | Git | ERP',
  }
]

const Skills = () => {
  return( 
  <section className='section' id='services'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>
        <motion.div 
        variants={fadeIn('right', 0.1)}
        initial="hidden"
        whileInView={'show'}
        viewport={{once: false, amount: 0.3}}
        className='flex-1 lg:bg-bottom bg-no-repeat
        mix-blend-lighten mb-12 lg:mb-0 '>
          <h2 className='h2 text-accent mb-6'>My Skills</h2>
          <h3 className='h3 max-w-[455px] mb-16'>I'm excited to be part of a team that shares a passion for technology and innovation. I'm always open to learning new skills and exploring new tools to enhance my work. These are some skills I have acquired.</h3>
        </motion.div>
        <motion.div 
        variants={fadeIn('left', 0.1)}
        initial="hidden"
        whileInView={'show'}
        viewport={{once: false, amount: 0.3}}
        className='flex-1'>
          <div>
            {services.map((service, index) => {
              const {name, description} = service;
              return( 
              <div className='border-b border-white/20 
              h-[146px] mb-[38px] flex' 
              key={index}>
                <div className='max-w-[476px]'>
                  <h4 className='text-[20px] tracking-wider 
                  font-primary font-semibold mb-6'>{name}</h4>
                  <p className='font-secondary leading-tight'>{description}</p>
                </div>
              </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
  );
};

export default Skills;
