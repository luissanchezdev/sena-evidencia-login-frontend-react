import React from 'react'
import Header from './ui/Header'
import Footer from './Footer'

function Layout({children}) {
  return (
    <>
      <div className='layout w-full'>
        <Header />
        <main className='main'>
          { children }
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Layout