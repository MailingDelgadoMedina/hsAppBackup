import '@/styles/globals.css'
import '../configureAmplify'
import MyNavBar from './myComponents/MyNavBar'
import MarketingFooter from '@/ui-components/MarketingFooter'
import Login from './myComponents/Login'
import { Mina } from 'next/font/google'
import { Authenticator } from '@aws-amplify/ui-react'


const mina = Mina({ subsets: ['latin'], weight:['400', '700'] })


export default function App({ Component, pageProps }) {
  return (
    <Login>

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
  </Login>
  )
}
