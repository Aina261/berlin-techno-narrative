import React from "react";
import {Mailto} from "./Mailto.component";
import ewerk from '../../static/ewerk.jpg';

export const English = () => {
    return (
        <div className={'px-4 flex justify-center py-10 bg-white'}>
            <div className={'w-full sm:w-3/5 md:w-1/2 xl:w-2/5'}>
                <h2 className={'text-center text-3xl mb-5 font-bold'}>English</h2>
                <div className="information">
                    <p className={'mb-5 text-justify'}>Berlin Techno Narrative is a long-standing project born out of a passion for electronic music and the city of Berlin.</p>
                    <p className={'mb-5 text-justify'}>For many years, as a fan of electronic music, I researched thoroughly in order to know as much as possible about this music born in Detroit and Chicago on the one hand, and in Belgium and England on the other...</p>
                    <p className={'mb-5 text-justify'}>These different movements arrived in 1988 in Berlin where it evolved and became a music of a whole generation and there the music corresponds to a page of history: the fall of the wall.</p>
                    <p className={'mb-5 text-justify'}>Like a city where everything had to be rebuilt and rebuilt, this movement took advantage of the spaces left free by the disappearance of the no-mans-land and the free houses and buildings left vacant by the inhabitants and administrations of the East.</p>
                    <p className={'mb-5 text-justify'}>From the Love Parade to the UFO, from the Tresor  to the Berghain, this visit will allow you to approach a page of History which forever changed the face of Berlin.</p>
                    <p className={'mb-5 text-justify'}>This visit lasts 3 hours and allows you to know the location of the places coupled with the History of Techno while also passing by most of the great monuments of the city.</p>
                </div>
                <figure>
                    <img src={ewerk} alt=""/>
                    <figcaption className={'italic text-sm'}><span className={'font-bold'}>E-work</span> was a techno music club in Berlin</figcaption>
                </figure>
                <div className="presentation mt-16">
                    <h3 className={'text-center text-2xl mb-5 font-bold'}>Content of the visit</h3>
                    <p className={'mb-5 text-justify'}>The visit will provide an understanding of the context of the creation of the Love Parade and its development. We will see how the first clubs were created and why these places were chosen.</p>
                    <p className={'mb-5 text-justify'}>We will see and talk about the old Tresor, E-Werk, the Bunker and many other clubs and places that have made history.</p>
                    <p className={'mb-5 text-justify'}>It will not only be a simple visit of the places, but also the story of the history of these places with a context and explanation of the situation.</p>
                    <p className={'mb-5 text-justify'}>This will help to understand the situation of the clubs then and now.</p>
                </div>
                <div className="contact">
                    <p className={'mb-5 text-justify'}>Contact us for more information and prices :</p>
                    <Mailto />
                </div>
            </div>
        </div>
    )
}
