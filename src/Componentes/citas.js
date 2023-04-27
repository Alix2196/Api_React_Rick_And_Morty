import { useEffect, useState, initialState } from "react";


function Citas() {
    const [quote] = useState(initialState, null)
    useEffect(function getQuites() {
        fetch('https://rickandmortyapi.com/graphql'.then(response => response.json()))
            .then(response => response.json())
            .then(data => console.log(data))
    }, []);
    return (
        <div>
            {quote}
        </div>
    )
}

export default Citas