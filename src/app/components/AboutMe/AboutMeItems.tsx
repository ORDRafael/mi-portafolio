'use client';

import LottieAnimation from "./LottieAnimation";
import React, { useEffect, useState } from 'react'; // Import useEffect and useState
import { AnimationData } from './LottieAnimation';

interface AboutMeProps {
   
    title: string;
    description: string;
}

export default function AboutMeItems ({ title, description} : AboutMeProps) {
    const [animationData, setAnimationData] = useState<AnimationData | null>(null); // State to hold the animation data

    useEffect(() => {
        // Fetch the JSON from its public URL
        fetch('/assets/animacion.json') // Correct public path
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setAnimationData(data); // Set the fetched data to state
            })
            .catch(error => {
                console.error("Error cargando la animación Lottie:", error);
                // The ErrorBoundary will catch this if render fails, but good to log
            });
    }, []); // Empty dependency array means this runs once on component mount

    return(
        <div className='px-5'>
            <div className="flex justify-start mb-10 pt-20">
                <h1 data-aos="fade-right" className="text-white text-3xl md:text-5xl font-medium">Sobre mi</h1>
            </div>
            <div data-aos="fade-up" className='p-5 rounded-2xl mb-5 hover:bg-gray-900 hover:shadow-2xl transition-all duration-300'>
                <div className="flex flex-col md:flex-row justify-between">
                <div className="flex-shrink-0 border-gray-800 rounded-2xl mx-auto w-full md:w-xl md:mx-0">
                    {animationData ? (
                        <LottieAnimation animacion={animationData} className="w-full aspect-square max-w-[500px]"/>
                    ) : (
                        <div className="w-full aspect-square max-w-[500px] bg-gray-800 rounded-2xl flex items-center justify-center">
                            <p className="text-gray-400">Cargando animación...</p>
                        </div>
                    )}
                </div>
                <div className="flex flex-col justify-center mt-6 md:mt-0">
                    <h3 className='text-white text-2xl md:text-3xl font-medium text-left md:text-left'>{title}</h3>
                    <p className='text-[#8296BD] font-medium text-lg md:text-xl text-left md:text-left mt-3'>{description}</p>
                </div>
            </div>
        </div>
        </div>
    );
}