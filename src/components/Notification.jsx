import React from 'react'
import { useState } from 'react'

function Notification({message, type = 'info'}) {

  return (
    <>
    { /* La variable message que llega desde el componete App, es validada, de tal forma que sí su valor es undefined, o simplemente una cadena vaciá el componente no se mostrará */ }
      { (message) && (
        
        <div className={type === 'success' ? 'notification-success' : 'notification-error'}>
          <p className='w-full rounded-md text-center'>{ message }</p>
        </div>
      ) }
    </>
  )
}

export default Notification