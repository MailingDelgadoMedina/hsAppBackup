import '@/styles/globals.css'
import '../configureAmplify'
import MyNavBar from './myComponents/MyNavBar'
import MarketingFooter from '@/ui-components/MarketingFooter'

import { Mina } from 'next/font/google'
import { Authenticator, Text } from '@aws-amplify/ui-react'
import MyFooter from './myComponents/MyFooter'


const mina = Mina({ subsets: ['latin'], weight:['400', '700'] })


export default function App({ Component, pageProps }) {
  
    
  return (
<div >
 
  
    {/* <Authenticator
    
    signUpAttributes={[]}
   
    
    
    > */}

  {/* {({signOut, user, }) =>( */}
  <div className={mina.className}>




  <Component {...pageProps} />

  

{/* className='fixed bottom-0 inset-x-0' */}
<div >
<MyFooter/>
</div>


  </div>
  {/* )
    } */}
  {/* </Authenticator> */}
  </div>

  )
}
