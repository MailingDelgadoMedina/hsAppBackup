/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  BellIcon,
  CalendarIcon,
  ChartPieIcon,
  Cog6ToothIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { Features2x3, ItemCard } from '@/ui-components'

import Image from 'next/image'
import Dashboard from './dashboard/Dashboard'
import Link from 'next/link'

const navigation = [
  { name: 'Dashboard', href: '/hsapp', icon: HomeIcon, current: true },
  { name: 'Students', href: '/students', icon: UsersIcon, current: false },
  { name: 'Enrollments', href: '/enrollments', icon: FolderIcon, current: false },
  { name: 'Activities', href: '/activities', icon: CalendarIcon, current: false },
  { name: 'Evaluations', href: '/evalutations', icon: DocumentDuplicateIcon, current: false },
  { name: 'Reports', href: '/reports', icon: ChartPieIcon, current: false },
]
const necessities = [
  { id: 1, name: 'Breaks', href: '/breaks', initial: 'B', current: false },
  { id: 2, name: 'Potty Log', href: '/pottylog', initial: 'P', current: false },
  { id: 3, name: 'Rewards', href: 'rewards', initial: 'R', current: false },
]
const userNavigation = [
  { name: 'Your profile', href: '/profile' },
  { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function SideNav() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog as="div" className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-hsbg/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button type="button" className="-m-2.5 p-2.5" onClick={() => setSidebarOpen(false)}>
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon className="h-6 w-6 text-hsgreen" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-hsbg px-6 pb-4 ring-1 ring-hsorange/10">
                    <div className="flex h-16 shrink-0 items-center">
                      <Link 
                      className="pointer"
                      href="/">
                         <Image
                          width={32}
                          height={32}
                        className="h-8 w-auto"
                        src="https://res.cloudinary.com/programandoconmei/image/upload/v1682278713/Hackthon/officiallogogreen_ljw6yp.png"
                        alt="HS Logo"
                      />
                      </Link>
                    
                    </div>
                    <nav className="flex flex-1 flex-col">
                      <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                          <ul role="list" className="-mx-2 space-y-1">
                            {navigation.map((item) => (
                              <li key={item.name}>
                                <a
                                  href={item.href}
                                  className={classNames(
                                    item.current
                                      ? 'bg-hsgreen text-hsbg'
                                      : 'text-hsorange hover:text-hsgreen hover:bg-[#000642]',
                                    'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                  )}
                                >
                                  <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                        <li>
                          <div className="text-xs font-semibold leading-6 text-hsgreen">Necessities</div>
                          <ul role="list" className="-mx-2 mt-2 space-y-1">
                            {necessities.map((necessities) => (
                              <li key={necessities.name}>
                                <a
                                  href={necessities.href}
                                  className={classNames(
                                    necessities.current
                                      ? 'bg-hsgreen text-hsbg'
                                      : 'text-hsorange hover:text-hsgreen hover:bg-[#000642]',
                                    'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                  )}
                                >
                                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-hsorange  hover:border hover:border-hsgreen  bg-[#000642] text-[0.625rem] font-medium text-hsorange group-hover:text-hsgreen group-hover:border-hsgreen">
                                    {necessities.initial}
                                  </span>
                                  <span className="truncate">{necessities.name}</span>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                        {/* <li className="mt-auto">
                          <a
                            href="#"
                            className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-hsgreen hover:bg-[#000642] hover:text-hsorange"
                          >
                            <Cog6ToothIcon className="h-6 w-6 shrink-0" aria-hidden="true" />
                            Settings
                          </a>
                        </li> */}
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-hsbg border-4 border-hsgreen px-6 pb-4">
            <div className="flex h-16 shrink-0 items-center">
            <Link
              className="pointer"
            href='/'
            >
      <Image

      width={32}
      height={32}
                
                src="https://res.cloudinary.com/programandoconmei/image/upload/v1682278713/Hackthon/officiallogogreen_ljw6yp.png"
                alt="Your Company"
              />


            </Link>
        
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className={classNames(
                            item.current
                              ? 'bg-hsgreen text-hsbg'
                              : 'text-hsorange hover:text-hsgreen hover:bg-[#000642]',
                            'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                          )}
                        >
                          <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <div className="text-xs font-semibold leading-6 text-hsgreen">Necessities</div>
                  <ul role="list" className="-mx-2 mt-2 space-y-1">
                    {necessities.map((necessities) => (
                      <li key={necessities.name}>
                        <a
                          href={necessities.href}
                          className={classNames(
                            necessities.current
                              ? 'bg-hsbg text-hsgreen'
                              : 'text-hsorange hover:text-hsgreen hover:bg-[#000642]',
                            'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                          )}
                        >
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-hsorange bg-hsbg text-[0.625rem] font-medium text-hsorange group-hover:text-hsgreen group-hover:border-hsgreen">
                            {necessities.initial}
                          </span>
                          <span className="truncate">{necessities.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                {/* <li className="mt-auto">
                  <a
                    href="#"
                    className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
                  >
                    <Cog6ToothIcon className="h-6 w-6 shrink-0" aria-hidden="true" />
                    Settings
                  </a>
                </li> */}
              </ul>
            </nav>
          </div>
        </div>

        <div className="lg:pl-72">
          <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-hsorange bg-[#000642] px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
            <button type="button" className="-m-2.5 p-2.5 text-hsgreen hover:text-hsorange lg:hidden" onClick={() => setSidebarOpen(true)}>
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>

            {/* Separator */}
            <div className="h-6 w-px bg-gray-900/10 lg:hidden" aria-hidden="true" />

            <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
              <form className="relative flex flex-1" action="#" method="GET">
                <label htmlFor="search-field" className="sr-only">
                  Search
                </label>
                <MagnifyingGlassIcon
                  className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-hsorange/60"
                  aria-hidden="true"
                />
                <input
                  id="search-field"
                  className="block bg-hsbg h-full w-full border-0 py-0 pl-8 pr-0 text-hspink placeholder:text-hsorange focus:ring-0 sm:text-sm"
                  placeholder="Search..."
                  type="search"
                  name="search"
                />
              </form>
              <div className="flex items-center gap-x-4 lg:gap-x-6">
                <button type="button" className="-m-2.5 p-2.5 text-hsorange hover:text-hsgreen">
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Separator */}
                <div className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10" aria-hidden="true" />

                {/* Profile dropdown */}
                <Menu as="div" className="relative">
                  <Menu.Button className="-m-1.5 flex items-center p-1.5">
                    <span className="sr-only">Open user menu</span>
                    <Image
                      className="h-8 w-8 rounded-full bg-hsbg/50"
                      width={32}
                      height={32}
                      src="https://res.cloudinary.com/programandoconmei/image/upload/v1682746951/Hackthon/profileIcon_g63gsv.png"
                      alt="profile pic"
                    />
                    <span className="hidden lg:flex lg:items-center">
                      <span className="ml-4 text-sm text-hspink font-semibold leading-6 " aria-hidden="true">
                        Tom Cook
                      </span>
                      <ChevronDownIcon className="ml-2 h-5 w-5 text-hsgreen" aria-hidden="true" />
                    </span>
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-hsbg py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                      {userNavigation.map((item) => (
                        <Menu.Item key={item.name}>
                          {({ active }) => (
                            <a
                              href={item.href}
                              className={classNames(
                                active ? 'bg-hsorange text-hsbg' : '',
                                'block px-3 py-1 text-sm leading-6 hover:text-hsbg text-hsgreen'
                              )}
                            >
                              {item.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <main className="  pt-10  h-screen lg:h-fit xl:h-full">
            <div className="px-4  sm:px-6 lg:px-8">
              {/* Your content */}
           <Dashboard/>
          



           
            
            
            
            
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
