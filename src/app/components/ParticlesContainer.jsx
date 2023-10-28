import React, {useCallback} from 'react'
import {Particles} from 'react-tsparticles'
import { loadFull } from 'tsparticles'
const ParticlesContainer = () => {

    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    const pasrticlesLoaded = useCallback(async() => {}, [])
    return <Particles
    className='w-full h-[80%] absolute translate-z-0 z-0'
    id='tsparticles' 
    init={particlesInit} 
    loaded={pasrticlesLoaded}
    options={{
        fullScreen: {enable: false},
        background: {
            color: {
                value:''
            },
        },
        fpsLimit: 120,
        interactivity:{
            events: {
                onClick: {
                    enable: false,
                    mode: 'push',
                },
                onHover:{
                    enable:true,
                    mode:'repulse'
                },
                resize: true
            },
            modes:{
                push: {
                    quantity: 90
                },
                repulse:{
                    distance: 200,
                    duration: 0.4,
                }
            }
        },
        particles: {
            color:{
                value:'#f0f9ff'
            },
            links:{
                color: '#0ea5e9',
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1
            },
            collisions:{
                enable: true,
            },
            move: {
                directions: 'none',
                enable: true,
                outModes:{
                    default: 'bounce'
                },
                random: false,
                speed:1,
                straight: false
            },
            number:{
                density:{
                    enable: true,
                    area: 800
                },
                value: 100
            },
            opacity:{
                value:0.5,
            },
            shape:{
                type:'circle',
            },
            size:{
                value: {min:1, max:4},
            },
        },
        detectRetina: true,
    }}
    />
  
}

export default ParticlesContainer