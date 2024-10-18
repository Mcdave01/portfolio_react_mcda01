import {CONTACT} from "../constants"
import {motion} from 'framer-motion'
const Contact = () => {
  return (
    <div className="w-full mt-5 mb-8">
        <motion.h1
        whileInView = {{opacity:1, x:0}}
        initial= {{opacity:0 , x:100}}
        transition = {{duration:1.5}}
        className="w-full text-4xl text-center
        font-semibold text-neutral-200 tracking-[0.25em]">
            Get In Touch
            </motion.h1>
    <motion.div
    whileInView = {{opacity:1, x:0}}
    initial = {{opacity:0, x:-100}}
    transition = {{duration:0.5, delay:0.5}}
    className="flex flex-col flex-wrap text-center mb-5xl font-sans-semibold tex5t-xl wb--full m text-neutral-500 lg:3/4 lg:mb-5xl">
       <p  className="my-4 mt-4"> {CONTACT.address}</p>
        <p  className="my-4 mt-4">{CONTACT.phoneNo}</p>
        <a href='mcdavegbenga@gmail.com ' className="my-4 mt-4 border-b border-neutral-700 lg:mb-5">{CONTACT.email}</a>
        </motion.div>
    </div>
  )
}

export default Contact
