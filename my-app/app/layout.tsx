import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import Footer from './components/nav/footer/FooTer'
import NavBar from './components/nav/NavBar'
import CartProvider from './providers/CartProvider'
import { Toaster } from 'react-hot-toast'
import { getCurrentUser } from '@/actions/getCurrentUser'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {    

 

 
  return (
    <html lang="en">
      <body className={`$ {inter.className} text-slate-700`}>
        <Toaster toastOptions={{
          style:{
            background:"rgb(35 45 65)" ,
            color:"#fff",
          },

        }}
        />
        <CartProvider>
        <div className="flex flex-col min-h-screen">
        <NavBar/>      
        <main className="flex-grow"> {children} </main>
        <Footer/>
        
        </div>

        </CartProvider>
        
        </body>
    </html>
  )
}
