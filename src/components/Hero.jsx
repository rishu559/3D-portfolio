import React from 'react'
import {motion} from 'framer-motion';
import {styles} from '../style';
import {ComputersCanvas} from './canvas'
const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-content items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient bg-[#915eff]'/>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi I'm <span className="text-[#915eff]">Rishu </span></h1>
          <p className={` mt-2 text-white-100`}>
            Lorem ipsum dolor sit amet <br className="md:hidden block"/>consectetur adipisicing elit. Et, quis!
          </p>
        </div>
      </div>
      <ComputersCanvas/>

      {/* <div className="absolute lg:hidden xs-bottom-10 bottom-20 w-full flex justify-center items-star">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary fles justify-center items-start p-2">
            <motion.div
              animate={{
                y:[0,24,0]
              }}
              transition={{
                duration:1.5,
                repeat:Infinity,
                repeatType:'loop'
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"

            />
          </div>
        </a>
      </div> */}
    </section>
  )
}

export default Hero