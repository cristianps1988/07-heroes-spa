import React from 'react'
import { HeroList } from '../components'

export const DcPage = () => {

    const publisher = 'DC Comics'

    return (
        <>
            <h1>DC Heroes</h1>
            <hr />
            <HeroList publisher={publisher} />
        </>
    )
}
