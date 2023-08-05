import React from "react";
import './Contener-Warp.css';
import BoxFile from "../Box-File/Box-File";

function ContenerWarp() {
    return(
        <div className="contener-warp">
            <div className="Contener-Bar-Top">
                <input type="text" placeholder="Buscar..." />
            </div>
            <div className="Warp-Render">
                <BoxFile />
                <BoxFile />
                <BoxFile />
                <BoxFile />
                <BoxFile />
                <BoxFile />
                <BoxFile />
                <BoxFile />
                <BoxFile />
                <BoxFile />
            </div>
        </div>
    );
}

export default ContenerWarp;