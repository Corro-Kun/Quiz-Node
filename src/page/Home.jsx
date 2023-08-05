import React from "react";
import BarLeft from "../components/Bar-Left/BarLeft.jsx";
import Desktop from "../components/Desktop/Desktop.jsx";
import ContenerWarp from "../components/Contener/Contener-Warp.jsx";

function Home() {
    return(
        <Desktop>
            <BarLeft />
            <ContenerWarp />
        </Desktop>
    );
}

export default Home;