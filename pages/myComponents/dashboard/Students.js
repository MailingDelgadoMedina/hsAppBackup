import{useState}from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import { ItemCard, ProfileCard } from '@/ui-components'
import ProfileCardCollection from '@/ui-components/ProfileCardCollection'
import ProfileCardStudents from '@/ui-components/ProfileCardStudents'


const StudentFormCreate = dynamic(() => import('@/ui-components/StudentFormCreate'))
const StudentFormUpdate = dynamic(() => import('@/ui-components/StudentFormUpdate'))


const tabs = [
  { name: 'Create a Student', href: '/Student', current: true },
  { name: 'View Students', href: '/Students', current: false },
  
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Students() {
   const [showForm, setShowForm] = useState(true)
const [selectedComponent, setSelectedComponent] = useState('');
  const router = useRouter()
  const   handleClick = (component) => {
    setSelectedComponent(component);
    // router.push('/' + component);
  };
  return (
    <div className='min-h-screen'>
 <div className="border-b border-gray-200 pb-5 sm:pb-0">
      <h3 className="text-base font-semibold leading-6 text-gray-900">Candidates</h3>
      <div className="mt-3 sm:mt-4">
        <div className="sm:hidden">
          <label htmlFor="current-tab" className="sr-only">
            Select a tab
          </label>
          <select
            id="current-tab"
            name="current-tab"
            className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            defaultValue={tabs.find((tab) => tab.current).name}
          >
            {tabs.map((tab) => (
              <option key={tab.name}>{tab.name}</option>
            ))}
          </select>
        </div>
        <div className="hidden sm:block">
          <nav className="-mb-px flex space-x-8">
            {tabs.map((tab) => (
              <Link
                key={tab.name}
                href={tab.href}
                onClick={(e) =>{
                                    e.preventDefault();
                                     handleClick(tab.name)}}
                className={classNames(
                  tab.current
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                  'whitespace-nowrap border-b-2 px-1 pb-4 text-sm font-medium'
                )}
                aria-current={tab.current ? 'page' : undefined}
              >
                {tab.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
   
 {showForm && selectedComponent === 'Create a Student' && 
     <StudentFormCreate
   
/>}

    {selectedComponent === 'View Students' && <ProfileCardStudents/>}
    </div>
  )
}

export default Students