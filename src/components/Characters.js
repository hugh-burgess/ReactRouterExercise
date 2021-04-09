export default function Characters() {
  return (
    <div>
      <section class="characterCard">
        <img className="characterPicture" src="#" alt="" />
        <h5 className="characterNameTitle">Character Name</h5>
      </section>
      <button className="characterLoadMore" type="button">
        Load More
      </button>
    </div>
  );
}

function getCharacters() {
  const url = "http://hp-api.herokuapp.com/api/characters";
  fetch(url).then((res) => res.json());
}
