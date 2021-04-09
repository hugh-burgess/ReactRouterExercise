import HomePagePic from "../images/HomePagePic.jpg";

export default function Home() {
  return (
    <div>
      <h1>Star Wars API</h1>
      <p>Welcome to the Star Wars API!</p>
      <img
        className="homeImage"
        src={HomePagePic}
        alt="Star Wars Logo"
      />
      <p>Deployed by Hugh during the neuefishe bootcamp.</p>
    </div>
  );
}
