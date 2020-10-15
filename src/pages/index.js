import React from "react"
import background from '../../static/background.jpg';
import facebook from '../../static/facebook.png';
import instagram from '../../static/instagram.png';
import {French} from "./French";
import {English} from "./English";
import {Deutsch} from "./Deutsch";

export default function Home() {
    return (
        <>
            <div
                style={{backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center'}}
                className={"w-full h-screen bg-black flex flex-col justify-center items-center"}
            >
                <div className={""}>
                    <h1
                        className={"uppercase font-black tracking-wide md:tracking-widest text-center"}
                        style={{color: '#E2382A', textShadow: '5px 5px 6px #000'}}
                    >
                        Berlin Techno Narrative
                    </h1>

                    <div className="socialNetwork flex mt-5 justify-center">
                        <a href="https://www.facebook.com/berlintechnonarrativex/" target={"_blank"} className={"ml-8 mr-8"}><img src={facebook} className={"w-12 sm:w-20 md:w-24 md:w-32"} alt="facebook"/></a>
                        <a href="https://www.instagram.com/berlintechnonarrativew/" target={"_blank"} className={"ml-8 mr-8"}><img src={instagram} className={"w-12 sm:w-20 md:w-24 md:w-32"} alt="instagram"/></a>
                        {/*<a href="https://www.goodmorningberlin.com/visites-guidees-berlin-en-francais/#club">Good Morning Berlin</a>*/}
                    </div>
                </div>
                <div className={"absolute bottom-0 transform rotate-90 m-2"}>
                    <svg xmlns="http://www.w3.org/2000/svg" className={"arrow-down"} viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>
                </div>
            </div>
            <French />
            <English />
            <Deutsch />
        </>
    )
}
