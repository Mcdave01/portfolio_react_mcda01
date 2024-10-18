import aboutImg from '../assets/about_img.jpeg'
import { ABOUT_TEXT } from '../constants'
import {motion} from 'framer-motion'

// const aboutMotion = (delay) => ({
//   hidden :{x: -100, opacity: 0},
//   visible: {x:0,
//   opacity:1,
//   transition:{duration:0.5, delay:delay}
//   }
// })

// const contentMotion = (delay) => ({
//   hidden :{x: 100, opacity: 0},
//   visible: {x:0,
//   opacity:1,
//   transition:{duration:0.5, delay:delay}
//   }
// })
const About = () => {
  return (
    <div className="pb-4 border-b border-neutral-900"  >
        <h1 className="my-10 tracking-[.25em] text-center text-gray-50 text-4xl">About<span className="text-neutral-500"> me</span>
             </h1>
    <div className="flex flex-wrap">
        <motion.div
        whileInView = {{opacity:1, x:0}}
        initial = {{opacity:0, x:-100}} 
        transition={{duration:1.5, delay:0.5, ease:'linear'}} className="w-full lg:w-1/2 h-[400px] lg:p-8">
            <div className="flex items-center justify-center rounded-[100%] h-400px">
                <img className=' rounded-[20%] ' src={aboutImg}  alt="About Me" />
         </div>
         
        </motion.div>
        <motion.div
        whileInView = {{opacity:1, x:0}}
        initial={{opacity:0, x:100}}
        transition={{duration:1.5, delay:0.5}}
        className="w-full lg:w-1/2 ">
          <div className="flex justify-center lg:justify-start">
            <p className="py-6 mx-5 my-2 mt-20 maxw-xl">{ABOUT_TEXT}</p>
          </div>
        </motion.div>
    </div>
    </div>
  )
}

export default About
