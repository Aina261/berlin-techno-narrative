import React from "react"

export const UpButton = () => {
  const _scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

  return (
    <div
      className={
        "fixed bg-white w-8 h-8 sm:w-12 sm:h-12 z-50 rounded-full flex justify-center items-center bottom-0 right-0 mb-3 mr-3"
      }
      onClick={_scrollToTop}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z" />
      </svg>
    </div>
  )
}
