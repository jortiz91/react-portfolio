import React from 'react'
import ProjectItem from './ProjectItem'
import eventsImg from '../assets/events.png'
import revealImg from '../assets/reveal.png'
import warImg from '../assets/war.png'

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        <p className="text-center py-8">
          Check out my Projects by clinking on the Image!
        </p>
        <div className="grid sm:grid-cols-2 gap-12">
          <ProjectItem img={eventsImg} title="Happenings App" />

          <ProjectItem img={revealImg} title="Reveal App" />

          <ProjectItem img={warImg} title="Card War App" />
        </div>
      </h1>
    </div>
  )
}
export default Projects
