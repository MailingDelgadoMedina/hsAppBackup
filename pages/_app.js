import '@/styles/globals.css'
import '../configureAmplify'
import MyNavBar from './myComponents/MyNavBar'
import MarketingFooter from '@/ui-components/MarketingFooter'

import { Mina } from 'next/font/google'
import { Authenticator, Text } from '@aws-amplify/ui-react'


const mina = Mina({ subsets: ['latin'], weight:['400', '700'] })


export default function App({ Component, pageProps }) {
  return (
<div className='bg-hsbg  min-h-full p-52    '> 
  <Text
              fontFamily="Minako"
              fontSize="96px"
              fontWeight="400"
              color="rgba(254,148,42,1)"
              lineHeight="158px"
              textAlign="center"
              display="block"
              direction="column"
              justifyContent="unset"
              width="726px"
              height="173px"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 50px"
              marginLeft={380}
              whiteSpace="pre-wrap"
           
            >Homeschool Book</Text>
  
    <Authenticator
    
    signUpAttributes={[]}
   
    
    
    >

  {({signOut, user, }) =>(
  <div className={mina.className}>


<MyNavBar/>

  <Component {...pageProps} />


{/* className='fixed bottom-0 inset-x-0' */}
<div >
  <MarketingFooter/>
</div>


  </div>
  )
    }
  </Authenticator>
  </div>

  )
}
