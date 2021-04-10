import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [list, setList] = useState(12);


  useEffect(() => {
    const url = `https://akabab.github.io/starwars-api/api/all.json`;

    fetch(url)
      .then((res) => res.json())
      .then((dataFromApi) => {
        setCharacters((prevCharacters) => {
         return [...prevCharacters, ...dataFromApi];

      });


      });

  }, []);
  function renderCharacters() {
  return characters.filter((person) => person.id <= list).map((person) => {
  const {id, name, image, died} = person;
 return (


        <section key={image} className={`characterCard ${died === undefined ? "characterAlive" : "characterDead"}`}>
        <img
          className="characterPicture"
          src={image}
          alt={name}
        />


        <h3 className="characterNameTitle">
        <Link
        to={`/characters/${id}`}>{name}</Link>
        </h3>
       </section>
    )
  })};

  

     

  function handleLoadMore() {
    if (list < characters.length) {
      setList(list + 12)
    }
  }
  

  return (
    <div className="charactersPage">
      <div className="characterList">{renderCharacters()}</div>
   <button className="characterLoadMore"  onClick={handleLoadMore}>Load more </button>
        
    </div>
  );
  }


