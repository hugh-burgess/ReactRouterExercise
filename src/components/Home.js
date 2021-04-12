import HomePagePic from '../images/HomePagePic.jpg'

export default function Home() {
  return (
    <div className="homePage">
      <h1 className="whiteText">Star Wars API</h1>
      <p className="whiteText">
        <em>Welcome to the Star Wars API!</em>
      </p>
      <p id="myID"></p>
      <img className="homeImage" src={HomePagePic} alt="Star Wars Logo" />
      <p className="whiteText">
        {' '}
        Have a little look around! Click on your favourite character and see
        more stats about them, have fun!
      </p>
      <p className="whiteText">
        Deployed by Hugh during the neuefishe bootcamp.
      </p>
      <p className="whiteText">
        API provided by{' '}
        <a
          href="https://github.com/akabab/starwars-api#alljson"
          target="_blank"
          rel="noreferrer"
        >
          Akabab from Github
        </a>
        .
      </p>
    </div>
  )
}
