import { Fragment, useEffect, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import "../../configureAmplify"
import { Auth } from 'aws-amplify'
import { Authenticator, Button } from '@aws-amplify/ui-react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'

const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'App', href: '/hsapp', current: false },
  { name: 'Contact', href: '/contact', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function MyNavBar() {
  const router = useRouter();
  // const [uiState, setUiState] = useState(null);
  // useEffect(() => {
  //   checkUser()
  //   async function checkUser() {
  //     const user = await Auth.currentAuthenticatedUser()
  //    if (user) {
  //      console.log('user: ', user)
  //     }else{
  //       console.log('no user')
  //     }
     
  //   }
  // }, [])


  return (


    <Disclosure as="nav" className="bg-hsbg border-hsgreen border-y-2">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-hspink hover:border-hsgreen hs-border-2 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Image
                    className="block  lg:hidden"
                    height={32}
                    width={32}
                    src="https://res.cloudinary.com/programandoconmei/image/upload/v1682278713/Hackthon/officiallogogreen_ljw6yp.png"
                    alt="Homeschool Book App"
                  />
                  <Image
                    className="hidden lg:block"
                    height={40}
                    width={40}
                    src="https://res.cloudinary.com/programandoconmei/image/upload/v1682278713/Hackthon/officiallogogreen_ljw6yp.png"
                    alt="Homeschool Book App"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-hsbg text-hscream' : 'text-hscream hover:border-hsorange hover:border-2  hover:text-hsgreen',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="rounded-full bg-hsbg border-hsorange border-2 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-hsgreen focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6 text-hsorange  bg-hsbg" aria-hidden="true" />
                </button>
  {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3 z-50">
                  <div>
                    <Menu.Button className="flex rounded-full bg-hsbg text-sm focus:outline-none focus:ring-2 focus:ring-hspink focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      <Image
                        className=" rounded-full "
                        height={32}
                        width={32}
                        src="https://res.cloudinary.com/programandoconmei/image/upload/v1682746951/Hackthon/profileIcon_g63gsv.png"
                        alt="user placeholder"
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-hsbg py-1 shadow-lg ring-1 ring-hsgreen ring-opacity-5 text-hsorange focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="/profile"
                            className={classNames(active ? 'bg-hscream text-hsbg' : '', 'block px-4 py-2 text-sm text-hsorange border-hsgreen border-2')}
                          >
                            Your Profile
                          </Link>
                        )}
                      </Menu.Item>
                     

                      {/* {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-hscream text-hsbg' : '', 'block px-4 py-2 text-sm text-hsorange border-hsgreen border-2')}
                          >
                            Sign out
                          </a>
                        )} */}
                      <Menu.Item>
   {({ active }) => (
                          <a
                           onClick={() => Auth.signOut()}
                            className={classNames(active ? 'bg-hscream text-hsbg' : '', 'block px-4 py-2 text-sm text-hsorange border-hsgreen border-2')}
                          >
                            Sign out
                          </a>
                        )} 
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-hsorange' : 'text-hspink border-hsorange hover:text-hsbg border-2 hover:bg-hsgreen',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
)
    
  
}

export default MyNavBar