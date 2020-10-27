import React from "react"
import goodMorningBerlin from "../../static/logo-good-morning-berlin.png"
import facebook from "../../static/facebook.svg"
import instagram from "../../static/instagram.svg"

export const SocialNetwork = () => {
  return (
    <div className={"flex justify-center"}>
      <div className={"px-4 w-full sm:w-3/5 md:w-1/2 xl:w-2/5 my-12"}>
        <div
          className={
            "flex flex-col sm:flex-row justify-around items-center flex-wrap"
          }
        >
          <p className={"font-semibold"}>Suivez-nous</p>
          <p className={"font-semibold"}>Follow us</p>
          <p className={"font-semibold"}>Folgen Sie uns</p>
        </div>
        <div className="flex flex-col sm:flex-row justify-around items-center mt-16">
          <a
            href="https://www.facebook.com/berlintechnonarrativex/"
            target={"_blank"}
            rel={"noreferrer"}
            className={
              "transform transition duration-75 ease-in-out hover:scale-110"
            }
          >
            <img
              src={facebook}
              className={"socialNetwork my-5"}
              alt="facebook"
            />
          </a>
          <a
            href="https://www.goodmorningberlin.com/visites-guidees-berlin-en-francais/#club"
            target={"_blank"}
            rel={"noreferrer"}
            className={
              "transform transition duration-75 ease-in-out hover:scale-110"
            }
          >
            <img
              src={goodMorningBerlin}
              className={"w-64 my-5"}
              alt="Good morning berlin logo"
            />
          </a>
          <a
            href="https://www.instagram.com/berlintechnonarrativew/"
            target={"_blank"}
            rel={"noreferrer"}
            className={
              "transform transition duration-75 ease-in-out hover:scale-110"
            }
          >
            <img
              src={instagram}
              className={"socialNetwork my-5"}
              alt="instagram"
            />
          </a>
        </div>
      </div>
    </div>
  )
}
