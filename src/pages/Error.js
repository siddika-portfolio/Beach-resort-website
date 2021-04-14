import React from 'react'
import { Link } from 'react-router-dom'
import { Banner } from '../component/Banner'
import { Hero } from '../component/Hero'

export default function Error() {
    

    return (
        <>
         <Hero>
           <Banner title="404" subTitle="page not found">
              <Link to="/" className="btn-primary">
                return home
              </Link>
           </Banner>
         </Hero>
        </>
    )
}
