import React from "react";
import {Mailto} from "./Mailto.component";
import tresor from '../../static/tresor.jpg';

export const French = () => {
    return (
        <div className={'px-4 flex justify-center py-10 bg-gray-200'}>
            <div className={'w-full sm:w-3/5 md:w-1/2 xl:w-2/5'}>
                <h2 className={'text-center text-3xl mb-5 font-bold'}>Français</h2>
                <div className="information">
                    <p className={'mb-5 text-justify'}>Berlin Techno Narrative est un projet de longue date né d'une passion de la musique électronique et de la ville de Berlin.</p>
                    <p className={'mb-5 text-justify'}>Pendant des années, passionné de musique électronique, je me suis documenté à fond afin de connaître le maximum de données sur cette musique née à Détroit et Chicago d'un côté, puis en Belgique et en Angleterre de l'autre...</p>
                    <p className={'mb-5 text-justify'}>Ces différents mouvements sont arrivés en 1988 jusqu'à Berlin ou cela a évolué et cela s'est transformé en une musique de toute une génération et là la musique correspond alors à une page de l'Histoire : la Chute du mur.</p>
                    <p className={'mb-5 text-justify'}>A l'image d'une ville où tout était à refaire et à reconstruite, ce mouvement a profité des espaces laissés libre par la disparition des no-mans-land et des habitations et immeubles libres laissés vacants par les habitants et administrations de l'est.</p>
                    <p className={'mb-5 text-justify'}>De la Love Parade à l'UFO, du Trésor au Berghain, cette visite vous permettra d'aborder une page d'Histoire qui à tout jamais a changé le visage de Berlin.</p>
                    <p className={'mb-5 text-justify'}>Cette visite dure 3h et permet de connaître l'emplacement des lieux couplé à l'Histoire de la Techno en passant également auprès de la plus-part des grands monuments de la ville.</p>
                </div>
                <figure>
                    <img src={tresor} alt=""/>
                    <figcaption className={'italic text-sm'}><span className={'font-bold'}>Tresor</span> est une discothèque et une maison de disques de techno underground à berlin</figcaption>
                </figure>
                <div className="presentation mt-16">
                    <h3 className={'text-center text-2xl mb-5 font-bold'}>Contenu de la visite</h3>
                    <p className={'mb-5 text-justify'}>La visite permettra de comprendre le contexte de la création de la Love Parade ainsi que de son développement. Nous verrons comment les premiers clubs se sont créés et pourquoi le choix de ces endroits.</p>
                    <p className={'mb-5 text-justify'}>Nous verrons et parlerons de l'ancien Trésor, E-Werk, le Bunker et plein d'autres clubs et lieux ayant fait l'Histoire.</p>
                    <p className={'mb-5 text-justify'}>Ce ne sera pas qu'une simple visite de lieux, mais aussi le récit de l'Histoire de ces lieux avec une mise en contexte et une explication de la situation.</p>
                    <p className={'mb-5 text-justify'}>Cela permettra ainsi de comprendre la situation des clubs à l'époque et maintenant.</p>
                </div>
                <div className="contact">
                    <p className={'mb-5 text-justify'}>Contact pour plus de renseignements et tarifs :</p>
                        <Mailto />
                </div>
            </div>
        </div>
    )
}
