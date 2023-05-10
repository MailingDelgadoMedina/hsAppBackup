import React from 'react'

import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'


import Image from 'next/image'


import dynamic from 'next/dynamic'




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



    </div>
  )
}

export default Dashboard