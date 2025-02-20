"use client";
import React, {useState} from 'react'
import { ThemeProvider as NextThemesProvider } from "next-themes"
import Header from '@/components/ui/custom/Header';
import { MessageContext } from '@/context/MessageContext';

function provider({children}) {
  const [messages, setMessages] = useState();
  return (
    <div>
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
    </div>
  )
}

export default provider
