import {useState,useEffect} from 'react';

function Personajes() {
  const [datos, setDatos] = useState(null);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => {
        setDatos(data.results);
      });
  }, []);

  if (!datos) {
    return <p>Cargando...</p>;
  }

  return (
    <div>
      <p>Los personajes son:</p>
        <ul className='container'> {datos.map(personaje => ( <li key={personaje.id}><img src={personaje.image} alt={personaje.name} />{personaje.name}</li>))}
      
        </ul>
    </div>
  );
}

export default Personajes;