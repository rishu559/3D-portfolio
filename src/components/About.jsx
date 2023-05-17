import React from 'react'
import {Tilt} from 'react-tilt'
import {motion} from 'framer-motion'
import {styles} from '../style'
import {services} from '../constants'
import {fadeIn,textVariant} from '../utils/motion'

const ServiceCard = ({index,title,icon}) =>{
  return (
    <p>{title}</p>
  )
}
const About = () => {
  return (
    <>
      <motion.div variant={textVariant()}>
        <p className={styles.sectionSubText}>Introdution</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p variants={fadeIn("","",0.1,1)} 
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur perferendis tempore quod commodi dicta veniam illum, rem officiis ex explicabo praesentium, vitae rerum sunt tenetur repudiandae dolore voluptates nobis. Asperiores, eaque! Iusto architecto adipisci porro ad, veniam culpa doloremque, ea iure atque, consequatur expedita cum quibusdam! Quibusdam unde repudiandae totam laborum eius molestiae, tenetur saepe recusandae debitis porro reiciendis, alias ratione, nostrum dolore blanditiis sunt minima eaque! Placeat natus unde iure ea. Nesciunt fugit ad aliquid doloremque nihil amet facilis?
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
          {
            services.map((service,index) => (
              <ServiceCard key={service.title} index={index} {...service}/>
            ))
          }
      </div>
    </>
  )
}

export default About