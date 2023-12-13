import React from 'react'
const ProjectItem = ({ img, title }) => {
  return (
    <div>
      <img src={img} alt={title} className="rounded-lg shadow-lg " />
      <div>
        <h3>
          <a href="" className="text-lg font-bold text-[#001b5e]">
            {title}
          </a>
        </h3>
      </div>
    </div>
  )
}
export default ProjectItem
