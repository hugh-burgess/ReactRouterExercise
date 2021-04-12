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

  const isAffArray = Array.isArray(singlePerson.affiliations)
  const affilList =
    isAffArray && singlePerson.affiliations.length > 1 ? (
      singlePerson.affiliations.map((item) => <li>{item}</li>)
    ) : (
      <li>{singlePerson.affiliations}</li>
    )

  const isMastArray = Array.isArray(singlePerson.masters)
  const mastersList =
    isMastArray && singlePerson.masters.length > 1 ? (
      singlePerson.masters.map((item) => <li>{item}</li>)
    ) : (
      <li>{singlePerson.masters}</li>
    )

  const isApprArray = Array.isArray(singlePerson.apprentices)
  const apprenticesList =
    isApprArray && singlePerson.apprentices.length > 1 ? (
      singlePerson.apprentices.map((item) => <li>{item}</li>)
    ) : (
      <li>{singlePerson.apprentices}</li>
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
      <div>
        {singlePerson.height === undefined
          ? ''
          : `Height: ${singlePerson.height}m`}{' '}
      </div>
      <div>
        {singlePerson.mass === undefined
          ? ''
          : `Weight: ${singlePerson.mass}kg`}{' '}
      </div>
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
        {affilList.length > 0 && (
          <div className="boxParent">
            <div>Affiliations:</div>
            <div className="boxChild capitaliseText">
              <ul className="liParent">{affilList}</ul>
            </div>
          </div>
        )}
      </div>
      <div>
        {mastersList.length > 0 && (
          <div className="boxParent">
            <div>Masters:</div>
            <div className="boxChild capitaliseText">
              <ul className="liParent">{mastersList}</ul>
            </div>
          </div>
        )}
      </div>
      <div>
        {apprenticesList.length > 0 && (
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
        <button
          id="myID"
          className="backButton"
          onClick={() => history.goBack()}
        >
          {' '}
          Back{' '}
        </button>
      </div>
    </div>
  )
}
