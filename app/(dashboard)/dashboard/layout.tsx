import React from 'react'

const layout = ( {children} : { children : React.ReactNode}) => {
  return (
    // children will be the page content of the route we're visiting

    <div>
        This will be for all dashboard routes.
        {children}
    </div>

  )
}

export default layout