import React from 'react'
import SectionHeading from '../shared/SectionHeading'
import { projectsData } from '@/data'
import ProjectCard from './ProjectCard'

function Projects() {
  return (
    <div>
        <SectionHeading>My Projects</SectionHeading>
        <div className='flex flex-col gap-2'>
            {
                projectsData.map((project,index)=>(
                    <ProjectCard key={index} {...project}/>
                ))
            }
        </div>
    </div>
  )
}

export default Projects