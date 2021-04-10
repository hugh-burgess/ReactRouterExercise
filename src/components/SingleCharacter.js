import { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'

export default function SingleCharacter() {
  const { id } = useParams()

  const history = useHistory()
  const [singlePerson, setSinglePerson] = useState({})

  useEffect(() => {
    const url = `https://akabab.github.io/starwars-api/api/id/${id}.json`

    fetch(url)
      .then((res) => res.json())
      .then((dataFromApi) => {
        setSinglePerson(dataFromApi)
      })
  }, [id])
  const list = singlePerson.affiliations ?? []
  console.log(list)
  const affilList = list.map((item) => <li>{item}</li>)

  const list2 = singlePerson.masters ?? []
  console.log(list2)
  const mastersList = list2.map((item) => <li>{item}</li>)

  const list3 = singlePerson.apprentices ?? []
  console.log(list3)
  const apprenticesList = list3.map((item) => <li>{item}</li>)

  return (
    <div
      className={`singleCard ${
        singlePerson.died === undefined ? 'characterAlive' : 'characterDead'
      }`}
    >
      <h1 className="singleNameTitle">{singlePerson.name}</h1>
      <img
        className="singlePicture"
        src={singlePerson.image}
        alt={singlePerson.name}
      />
      <h2>Stats:</h2>
      <div className="capitaliseText">Species: {singlePerson.species} </div>
      <div>Height: {singlePerson.height}m </div>
      <div>Weight: {singlePerson.mass}kg </div>
      <div className="capitaliseText">Homeworld: {singlePerson.homeworld} </div>
      <div>
        {singlePerson.species === 'droid'
          ? `Created: In the year ${singlePerson.born}`
          : `Born: In the year ${singlePerson.born}`}{' '}
      </div>
      <div>
        {singlePerson.died === undefined
          ? ''
          : `Died: In the year ${singlePerson.died}`}{' '}
      </div>
      <div>Status: {singlePerson.died ? 'Dead' : 'Alive'}</div>
      ---
      <br />
      <div>
        {singlePerson.affiliations !== undefined && (
          <div className="boxParent">
            Affiliations:
            <ul className="boxChild">{affilList}</ul>
          </div>
        )}
      </div>
      <div>
        {singlePerson.masters !== undefined && (
          <div className="boxParent">
            Masters:
            <ul className="boxChild">{mastersList}</ul>
          </div>
        )}
      </div>
      <div>
        {singlePerson.apprentices !== undefined && (
          <div className="boxParent">
            Apprentices:
            <ul className="boxChild">{apprenticesList}</ul>
          </div>
        )}
      </div>
      <br />
      <button onClick={() => history.goBack()}> Back </button>
    </div>
  )
}
