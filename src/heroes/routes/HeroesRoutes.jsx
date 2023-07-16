import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { DcPage, HeroPage, MarvelPage, SearchPage } from '../pages'
import { Navbar } from '../../ui/components/Navbar'

export const HeroesRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Navigate to="/marvel" />} />
                    <Route path="marvel" element={<MarvelPage />} />
                    <Route path="dc" element={<DcPage />} />
                    <Route path="search" element={<SearchPage />} />
                    <Route path="hero/:id" element={<HeroPage />} />
                </Routes>
            </div>

        </>
    )
}
