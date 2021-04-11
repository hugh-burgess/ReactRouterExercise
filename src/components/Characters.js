import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Monmothma from '../images/Monmothma.webp'
import San_Hill from '../images/San_Hill.webp'
import { GrTopCorner } from 'react-icons/gr'

export default function Characters() {
  const [characters, setCharacters] = useState([])
  const [list, setList] = useState(43)
  const [search, setSearch] = useState('all')
  const [nameSearch, setNameSearch] = useState('')

  useEffect(() => {
    const url = `https://akabab.github.io/starwars-api/api/all.json`

    fetch(url)
      .then((res) => res.json())
      .then((dataFromApi) => {
        setCharacters((prevCharacters) => {
          return [...prevCharacters, ...dataFromApi]
        })
      })
  }, [])

  function handleChangeEvent(event) {
    const inputValue = event.target.value

    setNameSearch(inputValue.toLowerCase())
  }

  function handleSelectGender(event) {
    event.preventDefault()

    const inputValue = event.target.value
    console.log(inputValue)
    if (inputValue === 'male') {
      setSearch('male')
    } else if (inputValue === 'female') {
      setSearch('female')
    } else if (inputValue === 'all') {
      setSearch('all')
    }
  }

  function renderCharacters() {
    let filteredCharacters
    if (search === 'all') {
      filteredCharacters = characters.filter((person) => person.id <= list)
    }
    if (search === 'male') {
      filteredCharacters = characters.filter(
        (person) => person.gender === 'male'
      )
    }
    if (search === 'female') {
      filteredCharacters = characters.filter(
        (person) => person.gender === 'female'
      )
    }

    const filteredAgain = filteredCharacters.filter(
      (person) =>
        person.name.toLowerCase().includes(nameSearch) || nameSearch === ''
    )

    return filteredAgain.map((person) => {
      const { id, name, image, died } = person

      return (
        <section
          key={id}
          className={`characterCard ${
            died === undefined ? 'characterAlive' : 'characterDead'
          }`}
        >
          <Link className="nameLink" to={`/characters/${id}`}>
            <div className="characterNameTitle">{name}</div>
            <img
              className="characterPicture"
              src={
                name === 'Mon Mothma'
                  ? Monmothma
                  : name === 'San Hill'
                  ? San_Hill
                  : image
              }
              alt={name}
            />
          </Link>
        </section>
      )
    })
  }

  function handleLoadMore() {
    if (list < characters.length) {
      setList(list + 43)
      console.log()
    }
  }

  function myScrollFunc() {
    const myID = document.getElementById('myID')
    var y = window.scrollY
    if (y >= 800) {
      myID.className = 'topButton show'
    } else {
      myID.className = 'topButton hide'
    }
  }

  window.addEventListener('scroll', myScrollFunc)

  return (
    <div className="charactersPage">
      <div className="filterOptions">
        <p className="filterTitles">Name:</p>
        <input
          onChange={handleChangeEvent}
          className="searchBar"
          type="text"
          placeholder="Enter a character..."
        ></input>
        <p className="filterTitles">Status:</p>
        <select
          onClick={handleSelectGender}
          className="dropdownMenu"
          name="status"
          id="status"
        >
          <option value="all">All</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div className="renderParent">
        <div className="characterList">{renderCharacters()}</div>
      </div>
      <div className="loadMoreButtonParent">
        <button className="characterLoadMore" onClick={handleLoadMore}>
          Load more{' '}
        </button>
      </div>

      <div className="topButtonParent">
        <a href="#top">
          <button id="myID" className="topButton hide">
            <GrTopCorner className="topButtonIcon" />
          </button>
        </a>
      </div>
    </div>
  )
}
