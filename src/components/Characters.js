import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import SingleCharacter from "./SingleCharacter";
import { Link } from "react-router-dom";

export default function Characters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const url = `http://hp-api.herokuapp.com/api/characters/`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCharacters(data));
    return setCharacters;
  }, []);

  function renderCharacters() {
    return characters.map((person) => {
      const { name, species, gender, id, house, image, alive } = person;
      const split = name.split(" ");
    const split2 = split.join("");
    const characterLink = split2.toLowerCase();
      // console.log(characterLink);

      return (
        <li key={characterLink}>
          <Link to={`/characters/${characterLink}`}>{name}</Link>
        </li>

        // name={name}
        // species={species}
        // key={id}
        // gender={gender}
        // house={house}
        // photoUrl={image}
        // isAlive={alive}
      );
    });
  }

  function SingleCharacter() {
    const { characterLink } = useParams();
    const [singlePerson, setSinglePerson] = useState({});

    useEffect(() => {
      const url = `http://hp-api.herokuapp.com/api/characters/${characterLink}`;

      fetch(url)
        .then((res) => res.json())
        .then((dataFromHP) => setSinglePerson(dataFromHP.data));
    }, [characterLink]);

    return (
      <section class="characterCard">
        <img
          className="characterPicture"
          src={singlePerson.image}
          alt={singlePerson.name}
        />
        <h5 className="characterNameTitle">{singlePerson.name}</h5>
      </section>
    );
  }

  function handleLoadMore() {}

  return (
    <div>
      <div className="characterList">{renderCharacters()}</div>
      <button className="characterLoadMore" onClick={handleLoadMore}>
        Load More
      </button>
    </div>
  );
}

// function UserList() {
//   const [users, setUsers] = useState([]);
//   const [results, setResults] = useState(10);
//   const [filter, setFilter] = useState("");

//   const button = document.querySelector("button");

//   useEffect(() => {
//     const baseUrl = "https://randomuser.me/api/?inc=email,gender,name,picture";
//     let url = baseUrl;
//     if (results) {
//       url = `${baseUrl}&results=${results}`;
//     } else {
//       url = `${baseUrl}&results=10`;
//     }

//     fetch(url)
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data.results);
//         setUsers(data.results);
//       });
//   }, [results]);

//   function handleChangeEvent(event) {
//     setResults(event.target.value);
//   }

//   function renderPosts() {
//     let filteredType;
//     if (filter === "female") {
//       filteredType = users.filter((user) => user.gender === "female");
//     } else if (filter === "male") {
//       filteredType = users.filter((user) => user.gender === "male");
//     } else {
//       filteredType = users;
//     }

//     const userComponents = filteredType.map((user) => (
//       <User
//         key={user.email}
//         gender={user.gender}
//         photoUrl={user.picture.large}
//         title={user.name.title}
//         first={user.name.first}
//         last={user.name.last}
//       />
//     ));
//     return userComponents;
//   }

//   function handleClickAll() {
//     setFilter("");
//   }
//   function handleClickMale() {
//     setFilter("male");
//   }
//   function handleClickFemale() {
//     setFilter("female");
//   }

//   return (
//     <div>
//       <h1 className="titleName">Find-Me-A-Pal-Generator</h1>
//       <p>Number of results: {users.length}</p>

//       <div className="wrapper">
//         <input
//           onChange={handleChangeEvent}
//           type="text"
//           placeholder="enter a number.."
//         />
//       </div>

//       <button onClick={handleClickAll} className="headerButton" type="button">
//         All
//       </button>
//       <button onClick={handleClickMale} className="headerButton" type="button">
//         Male
//       </button>
//       <button
//         onClick={handleClickFemale}
//         className="headerButton"
//         type="button"
//       >
//         Female
//       </button>

//       <div className="userSection">{renderPosts()}</div>
//     </div>
//   );
// }

// export default UserList;
