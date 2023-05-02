import React from 'react'

import { Mina } from 'next/font/google'
import { Authenticator, Text } from '@aws-amplify/ui-react'




function Login2() {
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
    
    
    />
 
    </div>
  )
}

export default Login2