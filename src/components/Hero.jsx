
import{HERO_CONTENT} from '../constants'
import profilePic from '../assets/hero5.png'
import { motion } from "framer-motion"


const container = (delay) => ({

  hidden: {x: -100, opacity: 0},
  visible:{
    x: 0,
    opacity: 1,
    transition: {duration:0.5, delay: delay}
  }
})

const trans=(delay)=>({

  hidden: {x: 100, opacity: 0},
  visible:{
    x: 0,
    opacity: 1,
    transition: {duration:0.5, delay: delay}
  }
})


const Hero = () => {
  return (
    <div className="pb-4 border-b border-neutral-900 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start" >
               <motion.h1 
               variants={container(0)}
               initial="hidden"
               animate ="visible"
               
               className="pb-16 text-6xl font-thin tracking-[0.25em] lg:mt-16 lg:text-8xl"> Mcdave Gbenga</motion.h1>
               
                <motion.span 
                variants={container(0.5)}
                initial="hidden"
                animate ="visible"
                  className="text-4xl bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text">Full-Stack Developer
                  </motion.span>
                 <motion.p
                 variants={container(1)}
                 initial="hidden"
                 animate ="visible"
                  className="max-w-xl py-6 my-2 font-light tracking-tighter">
                    {HERO_CONTENT}
                  </motion.p>
            </div> 
        </div>
        <div className='w-full lg:w-1/2 lg:p-8'>
            <div 
            
            className="flex justify-center ">
           
        <motion.img 
          variants={trans(1)}
          initial="hidden"
          animate="visible"
            style={{height:'450px'}} src={profilePic}
         alt="Kelvin Rush" className='bg-white shadow-2xl rounded-[250px]'  />
              
            </div>
        </div>
      </div>  
    </div>
  )
}

export default Hero
