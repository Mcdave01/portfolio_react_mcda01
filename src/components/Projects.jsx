import {PROJECTS} from "../constants"
import {motion} from 'framer-motion'
const Projects = () => {
  return (
    <div  className="pb-4 border-b border-neutral-900" >
      <motion.h1 
      whileInView = {{opacity : 1, x:0 }}
      initial = {{opacity:0 , x: -100}}
      transition ={{duration:1.5, delay:1}}
      className="py-4 mb-4 text-4xl font-semibold tracking-[.25em] text-center text-neutral-100">Projects</motion.h1>
    <div>
        {PROJECTS.map((project, index)=>(
            <motion.div
            whileInView = {{opacity : 1, x:0 }}
            initial = {{opacity:0 , x:-100}}
            transition ={{duration:0.5, delay:1}}key={index} className="flex flex-wrap mb-8 lg:justify-center">
                <div className="w-full lg:w-1/4">
                <img src={project.image} width={150} height={150}  className="mb-10 rounded hpy-4"   alt={project.title} />     
            </div>
            <div className="w-full max-w-xl lg:3/4">
                <h6 className="mb-2 font-semibold">
                    {project.title}
                </h6>
                <p className="w-full mb-4 text-neutral-600">{project.description}</p>
                {project.technologies.map((tech, index)=> (
                    <span key={index} className="px-2 py-1 mt-4 mr-2 text-sm rounded bg-neutral-900 text-neutral-700">
                        {tech}
                    </span>
                    
                 ))}
                 </div>
            </motion.div>
        ))}
    </div>
    </div>
  )
}

export default Projects
