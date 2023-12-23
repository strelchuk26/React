import { useState } from "react";
import { CITIES } from "./cities-mock";


function CityList() {

    const [cities, setSities] = useState(CITIES);

    return (
        <>
            <h1>City List</h1>
            <ul>
                {cities.map((i) =>
                    <li key={i.id}>{i.id} - {i.name}</li>
                )}
            </ul>
        </>
    );
}

export default CityList;