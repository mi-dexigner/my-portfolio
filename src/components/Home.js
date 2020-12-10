import React from 'react'
import image from '../monstera-leaves.jpg';

export default function Home() {
    return (
        <mian>
            <img src={image} alt="Monstera Leaves" className="absolute object-cover w-full h-full object-cover" />
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name">Aloha. I'm Muhammad Idrees</h1>
            </section>
        </mian>
    )
}
