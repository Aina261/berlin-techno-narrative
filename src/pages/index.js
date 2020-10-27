import React, {useState, useEffect} from "react";

import {UpButton} from "../Component/UpButton.component";
import {Header} from "../Component/Header.component";
import {SocialNetwork} from "../Component/Social-Network.component";
import {French} from "../Component/French";
import {English} from "../Component/English";
import {Deutsch} from "../Component/Deutsch";
import {Footer} from "../Component/Footer.component";

export default function Home() {

    const [scrolling, setScrolling] = useState(false);
    const [scrollTop, setScrollTop] = useState(0);

    useEffect(() => {
        const onScroll = e => {
            setScrollTop(e.target.documentElement.scrollTop);
            setScrolling(e.target.documentElement.scrollTop > scrollTop);
        };
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [scrollTop]);

    return (
        <>
            {scrollTop > window.innerHeight / 2 ?
                <UpButton />
                : null
            }
            <Header />
            <SocialNetwork />
            <French />
            <English />
            <Deutsch />
            <Footer />
        </>
    )
}
