import React from 'react'

const layout = ( {children} : {children : React.ReactNode}) => {
  return (
    <div>
        This is a navbar under root
        {children}
    </div>
    // must render children
  )
}

export default layout