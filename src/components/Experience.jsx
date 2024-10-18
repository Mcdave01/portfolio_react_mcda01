import { EXPERIENCES } from "../constants"
import {motion} from 'framer-motion'
const Experience = () => {
  return (
    <div className="pb-4 border-b border-neutral-900">
        <h1 className="my-20 text-4xl text-center tracking-[.25em]">
            Experience
            </h1>
      <div> 
                  {EXPERIENCES.map((experience, index) => (
                    <motion.div
                    whileInView = {{opacity:1, x:0}}
                    initial = {{opacity:0, x: 100}} 
                    transition={{duration:1, delay:0.5, ease:'linear'}}
                    key={index} className="flex flex-wrap mb-8 lg:justify-center">
                      <div className="w-full lg:w-1/4">
                        
                     
                      <p className="text-xl font-semibold">{experience.year}</p>
                      </div>
                      <div className="w-full max-w-xl lg:w-3/4">
                   
                      <h6 className="mb-2 font-semibold">{experience.role} - {" "}
                         <span className="text-sm text-purple-100">
                          {experience.company}
                        </span> 
                        </h6>
                        <p className="mb-4 text-neutral-500">- {experience.description}</p>
                        {experience.technologies.map((tech,index)=>(
                        <span key={index} className="py-1 mt-6 mr-2 text-sm rounded text-neutral-600 bg-neutral-900" >{tech}</span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
            
               
                     </div>
  
  )
}

export default Experience
