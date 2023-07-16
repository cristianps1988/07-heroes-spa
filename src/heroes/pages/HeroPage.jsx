import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { getHeroById } from '../helpers'

export const HeroPage = () => {
    const { id } = useParams()
    const heroe = getHeroById(id)

    if (!heroe) return <Navigate to="/marvel" />

    return (
        <>
            <h1>Heroe</h1>
            <p>{heroe.superhero}</p>
            <p>{heroe.publisher}</p>
            <p>{heroe.alter_ego}</p>
            <p>{heroe.first_appearance}</p>
            <p>{heroe.characters}</p>
        </>
    )
}
