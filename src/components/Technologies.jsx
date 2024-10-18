import {RiReactjsLine} from "react-icons/ri"
import {TbBrandNextjs} from "react-icons/tb"
import {SiMongodb} from "react-icons/si"
import {DiRedis} from "react-icons/di"
import {FaNodeJs} from "react-icons/fa"
import {FaPhp} from "react-icons/fa6"
import {FaWordpress} from "react-icons/fa"
import {FaPython} from "react-icons/fa"
import {DiMysql} from "react-icons/di"
import {motion} from "framer-motion"

const iconVariants = (duration) =>({
    initial: {y: -10},
    animate: {
        y: [10 ,-10],
        transition:{
            duration:duration, 
            ease: "linear",
            repeat:Infinity,
            repeatType: "reverse",
        }
        
    }
})
const Technologies = () => {
  return (
    <div className="pb-24 border-b border-neutral-800">
        <h1 className="my-20 text-center text-4xl tracking-[.25em]">Technologies</h1>
        <motion.div
        whileInView={{opacity:1 , x : 0}}
        initial = {{opacity:0, x : -100}}
        transition = {{duration : 2.5}}
        className="flex flex-wrap justify-center gap-4 item-center">
            <motion.div 
            variants = {iconVariants(2.5)}
            initial ='initial'
            animate ='animate'
            className="p-4 border-4 rounded-2xl border-neutral-800">
                <RiReactjsLine className="text-7xl text-cyan-400" /> 
            </motion.div>
            <motion.div 
            variants={iconVariants(1.5)}
            initial = 'initial'
            animate='animate'
            className="p-4 border-4 rounded-2xl border-neutral-800">
                <TbBrandNextjs className="text-red-100 text-7xl" /> 
            </motion.div>
            <motion.div
            variants={iconVariants(1.5)}
            initial ='initial'
            animate = 'animate'
            className="p-4 border-4 rounded-2xl border-neutral-800">
                <SiMongodb className="text-green-400 text-7xl" /> 
            </motion.div>
            <motion.div 
            variants={iconVariants(2.5)}
            initial = 'initial'
            animate = 'animate'
            className="p-4 border-4 rounded-2xl border-neutral-800">
                <DiRedis className="text-red-400 text-7xl" /> 
            </motion.div>
            <motion.div
            variants = {iconVariants(3.5)}
            initial = 'initial'
            animate = 'animate'
            className="p-4 border-4 rounded-2xl border-neutral-800">
                <FaNodeJs className="text-green-400 text-7xl" /> 
            </motion.div>
            <motion.div
            variants = {iconVariants(1.5)}
            initial = 'initial'
            animate = 'animate'
             className="p-4 border-4 rounded-2xl border-neutral-800">
                <FaPhp  className="text-8xl text-grey-400" /> 
            </motion.div>
        </motion.div>

        <motion.div
        whileInView = {{opacity:1 , x : 0}}
        initial = {{opacity:0, x : 100}}
        transition = {{duration:1.5}}
        className="flex flex-wrap justify-center gap-4 mt-10 item-center">
            <motion.div 
            variants={iconVariants(2.5)}
            initial = 'initial'
            animate = 'animate'
             className="p-4 border-4 rounded-2xl border-neutral-800">
                <FaWordpress className="text-7xl text-cyan-400" /> 
            </motion.div>
            <motion.div
            variants = {iconVariants(1.5)}
            initial = 'initial'
            animate='animate'
             className="p-4 border-4 rounded-2xl border-neutral-800">
                <FaPython className="text-yellow-400 text-7xl" /> 
            </motion.div>
            <motion.div
            variants = {iconVariants(0.5)}
            initial = 'initial'
            animate = 'animate'
            className="p-4 border-4 rounded-2xl border-neutral-800">
                <DiMysql className="text-blue-400 text-7xl" /> 
            </motion.div>
           
        </motion.div>
       
    </div>
  )
}

export default Technologies
