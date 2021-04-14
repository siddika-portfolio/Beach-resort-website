import React from 'react'

export function Banner({children, title, subTitle}) {
    

    return (
        <div className="banner">
           <h1>{title}</h1> 
           <p>{subTitle}</p>
           {children}
        </div>

    )
}
