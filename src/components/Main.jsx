import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { FaLinkedinIn } from 'react-icons/fa'
const Main = () => {
  return (
    <div id="main">
      <img
        className="max-w-s w-full h-screen object-contain object-left scale-x-[-1]"
        src="./src/assets/wow.png"
      ></img>

      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
            I'm Jonathan Ortiz-Ryals
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            I'm a
            <TypeAnimation
              sequence={[
                'Developer',
                2000,
                'Coder',
                2000,
                'Army Veteran',
                2000,
                'Ethusiastic Learner',
                2000
              ]}
              wrapper="span"
              speed={50}
              cursor={true}
              style={{ fontSize: '1em', paddingLeft: '5px' }}
              repeat={Infinity}
            />
          </h2>
          <div>
            <div className="flex justify-between pt-6 max-w-[200px] w-full">
              <a
                href="https://www.linkedin.com/in/jonathan-ortiz-ryals/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn className="cursor-pointer" size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Main
