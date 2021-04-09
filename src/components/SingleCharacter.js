 import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
 
 export default function SingleCharacter() 
 
 {
    const { id } = useParams();

    const history = useHistory();
    const [singlePerson, setSinglePerson] = useState({});
    console.log(singlePerson)

    useEffect(() => {
      const url = `https://akabab.github.io/starwars-api/api/id/${id}.json`;

      fetch(url)
        .then((res) => res.json())
        .then((dataFromApi) => {
            setSinglePerson(dataFromApi);
        });
    }, [id]);

    return (
      <div class="characterCard">
        <h2 className="characterNameTitle">{singlePerson.name}</h2>
        <div>Now showing {singlePerson.name} </div>
        <div>Species: {singlePerson.species} </div>
        <img
          className="characterPicture"
          src={singlePerson.image}
          alt={singlePerson.name}
        />
              <button onClick={() => history.goBack()}> Back </button>

      </div>
    );
  }


      