import React from 'react'

import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'


import Image from 'next/image'
import Link from 'next/link'


const projects = [
  { name: 'Students', initials: 'ST', href: '/Students', members: 16, bgColor: 'bg-pink-600' },
  { name: 'Enrollments', initials: 'EN', href: '#', members: 12, bgColor: 'bg-purple-600' },
  { name: 'Activities', initials: 'AC', href: '#', members: 16, bgColor: 'bg-yellow-500' },
  { name: 'Evaluations', initials: 'EV', href: '#', members: 8, bgColor: 'bg-green-500' },
  { name: 'Reports', initials: 'RP', href: '#', members: 16, bgColor: 'bg-pink-600' },
  { name: 'Breaks', initials: 'BR', href: '#', members: 12, bgColor: 'bg-purple-600' },
  { name: 'Potty Log', initials: 'PT', href: '#', members: 16, bgColor: 'bg-yellow-500' },
  { name: 'Rewards', initials: 'RW', href: '#', members: 8, bgColor: 'bg-green-500' },

]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Dashboard() {
  return (
    <div className='h-screen'>


         <div className='mb-10 mt-10 bg-hsbg  border-hsorange border-4 '>

  <Image
  className='bg-hsbg   ml-48 lg:ml-36 '
            src="https://res.cloudinary.com/programandoconmei/image/upload/v1682474947/Hackthon/bulbgearpuzzle_bkmgdv.svg"
            width={100}
            height={100}
            alt="Picture of dashboard"
            
            />
            <div className='font-minako  text-6xl  flex flex-col items-center  text-hsorange justify-center'>
            Dashboard
            </div>
            </div>

{/* Tags  */}

 <div>
      {/* <h2 className="text-sm font-medium text-gray-500">Pinned Projects</h2> */}
      <ul role="list" className="mt-3 mb-24 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4  ">
        {projects.map((project) => (
          <li key={project.name} className="col-span-1  flex rounded-md shadow-sm">
            <div
              className={classNames(
                project.bgColor,
                ' border-4 border-hsbg flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-hsbg hover:text-hsgreen'
              )}
            >
              {project.initials}
            </div>
            <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-4 hover:bg-hsbg hover:text-hsgreen border-hsbg bg-white">
              <div className="flex-1 truncate px-4 py-2 text-sm">
                <Link href={project.href} className="font-medium  text- hover:text-hsgreen">
                  {project.name}
                </Link>
                {/* <p className="text-gray-500">{project.members} Members</p> */}
              </div>
              <div className="flex-shrink-0 pr-2">
                {/* <button
                  type="button"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-transparent bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span className="sr-only">Open options</span>
                  <EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true" />
                </button> */}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </div>
  )
}

export default Dashboard