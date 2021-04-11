export default function Home() {
  return (
    <div className="homePage">
      <h1>Star Wars API</h1>
      <p>
        <em>Welcome to the Star Wars API!</em>
      </p>

      <p>
        {' '}
        Have a little look around! Click on your favourite character and see
        more stats about them, have fun!
      </p>
      <p>Deployed by Hugh during the neuefishe bootcamp.</p>
      <p>
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
