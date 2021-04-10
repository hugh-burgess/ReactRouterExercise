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

  const list1 = singlePerson.affiliations ?? []
  console.log(list1)
  const affilList = Array.isArray(list1) ? (
    list1.map((item) => <li>{item}</li>)
  ) : Array.isArray(list1) === false ? (
    <li>{list1}</li>
  ) : (
    <li></li>
  )

  const list2 = singlePerson.masters ?? []
  console.log(list2)
  const mastersList = Array.isArray(list2) ? (
    list2.map((item) => <li>{item}</li>)
  ) : Array.isArray(list2) === false ? (
    <li>{list2}</li>
  ) : (
    <li></li>
  )

  const list3 = singlePerson.apprentices ?? []
  console.log(list3)
  const apprenticesList = Array.isArray(list3) ? (
    list3.map((item) => <li>{item}</li>)
  ) : Array.isArray(list3) === false ? (
    <li>{list3}</li>
  ) : (
    <li></li>
  )

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
            <div>Affiliations:</div>
            <div className="boxChild capitaliseText">
              <ul className="liParent">{affilList}</ul>
            </div>
          </div>
        )}
      </div>
      <div>
        {singlePerson.masters !== undefined && (
          <div className="boxParent">
            <div>Masters:</div>
            <div className="boxChild capitaliseText">
              <ul className="liParent">{mastersList}</ul>
            </div>
          </div>
        )}
      </div>
      <div>
        {singlePerson.apprentices !== undefined && (
          <div className="boxParent">
            <div>Apprentices:</div>
            <div className="boxChild capitaliseText">
              <ul className="liParent">{apprenticesList}</ul>
            </div>
          </div>
        )}
      </div>
      <br />
      <div>
        <a href={singlePerson.wiki} rel="noreferrer" target="_blank">
          Wikipedia
        </a>
      </div>
      <br />
      <div className="backButtonParent">
        <button className="backButton" onClick={() => history.goBack()}>
          {' '}
          Back{' '}
        </button>
      </div>
    </div>
  )
}
