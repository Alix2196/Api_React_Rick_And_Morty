import { useEffect, useState } from "react";
import '../Citas/Citas.css';

function Citas() {
    
    const [quote,setQuote] = useState (null);

    useEffect(function getQuotes() {
        fetch('https://rickandmortyapi.com/api/character')
            .then(response => response.json())
            .then(data => setQuote(data.data));  
       
    },[]);

    return (
        <div>
            <h1>{quote?.name}</h1>
        </div>
    );
}

export default Citas