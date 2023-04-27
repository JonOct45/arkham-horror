import React from "react";
import { returnInvestigators } from "./searchengine";

export default function Investigators() {

    let returnsInvest = returnInvestigators();

    return (
        <div>
            {returnsInvest}
        </div>
    )
}
