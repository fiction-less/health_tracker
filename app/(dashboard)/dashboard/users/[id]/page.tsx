import React from 'react'

const page = ( { params } : { params : { id : string }}) => {

    // same thing: const {id} = params;
    const id = params.id;
    return (
        <div>
        <h1> Users Details Page</h1>
        <h1 className='text-3xl'>User profile: {id}</h1>

        </div>
    )
}

export default page