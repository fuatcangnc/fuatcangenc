"use client"
import React from 'react'
import SectionHeading from '../shared/SectionHeading'
import { projectsData } from '@/data'
import ProjectCard from './ProjectCard'
import { useSectionInView } from '@/lib/hooks'

function Projects() {
  const {ref}=useSectionInView("Projects",0.5)
  return (
    <div ref={ref} id='projects'>
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