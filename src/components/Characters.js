import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Monmothma from "../images/Monmothma.webp"
import San_Hill from "../images/San_Hill.webp"

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
        <Link className="nameLink" to={`/characters/${id}`}>
        <div className="characterNameTitle">{name}</div>
        <img className="characterPicture" src={(name === "Mon Mothma") ? Monmothma : (name === "San Hill") ? San_Hill : image} alt={name}/>
        </Link>
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


