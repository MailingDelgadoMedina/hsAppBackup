import '@/styles/globals.css'
import "@aws-amplify/ui-react/styles.css";
import { Amplify } from 'aws-amplify';
import MyNavBar from './myComponents/MyNavBar'
import MarketingFooter from '@/ui-components/MarketingFooter'
import {studioTheme} from '@/ui-components';
import { Mina } from 'next/font/google'
import { Authenticator, Text, AmplifyProvider} from '@aws-amplify/ui-react'
import MyFooter from './myComponents/MyFooter'
import awsconfig from "@/aws-exports";



Amplify.configure(awsconfig);


const mina = Mina({ subsets: ['latin'], weight:['400', '700'] })


export default function App({ Component, pageProps }) {

    
  return (

    <AmplifyProvider theme={studioTheme}>
     
<div >
 
  
    {/* <Authenticator
    
    signUpAttributes={[]}
   
    
    
    > */}

  {/* {({signOut, user, }) =>( */}

  
  <div className={mina.className}>




  <Component {...pageProps} />

  

{/* className='fixed bottom-0 inset-x-0' */}
<div className='fixed bottom-0 inset-x-0' >
<MyFooter/>
</div>


  </div>
  {/* )
    } */}
  {/* </Authenticator> */}
  </div>
 </AmplifyProvider>
  )
}
