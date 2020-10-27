import React from "react"
import { Mailto } from "./Mailto.component"
import bunker from "../../static/bunker.jpg"

export const Deutsch = () => {
  return (
    <div className={"px-4 flex justify-center py-10 bg-gray-200"}>
      <div className={"w-full sm:w-3/5 md:w-1/2 xl:w-2/5"}>
        <h2 className={"text-center text-3xl mb-5 font-bold"}>Deutsch</h2>
        <div className="information">
          <p className={"mb-5 text-justify"}>
            Berlin Techno Narrative ist ein langjähriges Projekt, das aus der
            Leidenschaft für elektronische Musik und die Stadt Berlin entstanden
            ist.
          </p>
          <p className={"mb-5 text-justify"}>
            Seit vielen Jahren begeistere ich mich für elektronische Musik, ich
            habe mich gründlich dokumentiert, um möglichst viel über diese Musik
            zu erfahren, die einerseits in Detroit und Chicago, andererseits in
            Belgien und England geboren wurde...
          </p>
          <p className={"mb-5 text-justify"}>
            Diese verschiedenen Bewegungen kamen 1988 nach Berlin, wo sie sich
            weiterentwickelten und zu einer Musik einer ganzen Generation
            wurden, und dort entspricht die Musik dann einer Seite der
            Geschichte: dem Fall der Mauer.
          </p>
          <p className={"mb-5 text-justify"}>
            Im Bild einer Stadt, in der alles wieder aufgebaut und neu errichtet
            werden musste, nutzte diese Bewegung die durch das Verschwinden des
            Nomanlandes frei gewordenen Räume und die von den Bewohnern und
            Verwaltungen des Ostens frei gewordenen Häuser und Gebäude.
          </p>
          <p className={"mb-5 text-justify"}>
            Von der Love Parade bis zum UFO, vom Tresor bis zum Berghain, dieser
            Besuch ermöglicht es Ihnen, sich einer Seite der Geschichte zu
            nähern, die das Gesicht Berlins für immer verändert hat.
          </p>
          <p className={"mb-5 text-justify"}>
            Dieser Besuch dauert 3 Stunden und ermöglicht es Ihnen, die Lage von
            Orten kennen zu lernen, die mit der Geschichte des Techno verbunden
            sind, während Sie auch an den meisten der wichtigsten Denkmäler der
            Stadt vorbeikommen.
          </p>
        </div>
        <figure>
          <img src={bunker} alt="" />
          <figcaption className={"italic text-sm"}>
            <span className={"font-bold"}>Der Bunker</span> ist ein
            Luftschutzbunker, der 1992 zu einem Techno-Ha
          </figcaption>
        </figure>
        <div className="presentation mt-16">
          <h3 className={"text-center text-2xl mb-5 font-bold"}>
            Inhalt des Besuchs
          </h3>
          <p className={"mb-5 text-justify"}>
            Der Besuch wird es ermöglichen, den Kontext der Entstehung der Love
            Parade sowie ihre Entwicklung zu verstehen. Wir werden sehen, wie
            die ersten Clubs gegründet wurden und warum diese Orte ausgewählt
            wurden.
          </p>
          <p className={"mb-5 text-justify"}>
            Wir werden den alten Tresor, das E-Werk, den Bunker und viele andere
            Clubs und Orte, die Geschichte gemacht haben, sehen und darüber
            sprechen.
          </p>
          <p className={"mb-5 text-justify"}>
            Es wird nicht nur ein einfacher Besuch der Orte sein, sondern auch
            die Geschichte der Geschichte dieser Orte mit einem Kontext und
            einer Erklärung der Situation.
          </p>
          <p className={"mb-5 text-justify"}>
            Dies wird helfen, die Situation der Clubs damals und heute zu
            verstehen.
          </p>
        </div>
        <div className="contact">
          <p className={"mb-5 text-justify"}>
            Kontaktieren Sie uns für weitere Informationen und Preise :
          </p>
          <Mailto />
        </div>
      </div>
    </div>
  )
}
