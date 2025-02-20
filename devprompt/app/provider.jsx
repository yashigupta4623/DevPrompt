"use client";
import React, {useState} from 'react'
import { ThemeProvider as NextThemesProvider } from "next-themes"
import Header from '@/components/ui/custom/Header';
import { MessageContext } from '@/context/MessageContext';
import { UserDetailsContext } from '@/context/UserDetailsContext';
import { GoogleOAuthProvider } from '@react-oauth/google';

function Provider({children}) {
  const [messages, setMessages] = useState();
  const [userDetails, setUserDetails] = useState();
  return (
    <div>
      <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}>
      <UserDetailsContext.Provider value={{userDetails, setUserDetails}}>
      <MessageContext.Provider value={{messages, setMessages}}>
      <NextThemesProvider
         attribute="class"
         defaultTheme="dark"
         enableSystem
         disableTransitionOnChange
        >
          <Header />
        {children}
        </NextThemesProvider>
      </MessageContext.Provider>
      </UserDetailsContext.Provider>
      </GoogleOAuthProvider>
    </div>
  )
}

export default  Provider
