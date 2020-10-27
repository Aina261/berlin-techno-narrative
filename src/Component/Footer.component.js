import React from "react";
import footerBackground from "../../static/footer.jpg";

export const Footer = () => {

    const date = new Date().getFullYear();

    return (
        <div
            style={{backgroundImage: `url(${footerBackground})`}}
            className={'relative bg-cover bg-bottom bg-no-repeat w-full h-screen'}
        >
            <div
                className={'absolute bottom-0 w-full h-16 flex items-end p-2 justify-center sm:justify-between'}
                style={{backgroundColor: '#FF0000'}}
            >
                <p className={'text-white order-last sm:order-none text-center'}>Copyright &copy; Berlin Techno Narrative {date}</p>
            </div>
        </div>
    )
}
