import React from "react"
import background from "../../static/background.jpg"
import btnLogo from "../../static/logo.svg"

export const Header = () => {
  const _scrollDown = () =>
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" })

  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className={
        "w-full h-screen bg-black flex flex-col justify-center items-center"
      }
    >
      <div className={"ban banTop"} />
      <div>
        <div>
          <img src={btnLogo} alt="" className={"logo"} />
        </div>
        <h1
          className={
            "uppercase font-black tracking-wide md:tracking-widest text-center"
          }
        >
          Berlin Techno Narrative
        </h1>
      </div>
      <div
        className={"absolute bottom-0 transform rotate-90 m-2 z-50"}
        onClick={_scrollDown}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={"arrow-down"}
          viewBox="0 0 24 24"
        >
          <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
        </svg>
      </div>
      <div className={"ban banBottom"} />
    </div>
  )
}
