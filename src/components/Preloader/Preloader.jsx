import { Image, PreloaderContainer, } from "./PreloaderStyleComponents";
import { PreloaderImage } from '../../assets/export';
import React from "react";

const Preloader = () => {
    return (
        <PreloaderContainer id="pre-loader">

            <Image src={PreloaderImage} />

        </PreloaderContainer>
    )
}

export default Preloader;