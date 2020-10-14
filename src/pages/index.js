import React from "react"
import background from '../../static/background.jpg';

export default function Home() {
    return (
        <div
            style={{backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center'}}
            className={"w-screen h-screen bg-black flex flex-col justify-center items-center"}
        >
            <h1
                className={"uppercase text-4xl sm:text-5xl md:text-6xl font-black tracking-wide text-center"}
                style={{color: '#E2382A', textShadow: '3px 3px 4px #000'}}
            >
            Berlin Techno Narrative
            </h1>
            <div className={"absolute bottom-0 transform rotate-90 m-2"}>
                <svg xmlns="http://www.w3.org/2000/svg" fill={'#fff'} width="24" height="24" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>
            </div>
        </div>
    )
}
