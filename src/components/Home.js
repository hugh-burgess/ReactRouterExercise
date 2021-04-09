import homepagePicture from "../images/homepagePicture.jpg";

export default function Home() {
  return (
    <div>
      <h1>Welcome to the Harry Potter API!</h1>
      <img
        className="homeImage"
        src={homepagePicture}
        alt="Harry Potter Logo"
      />
      <p>Deployed by Hugh during the neuefishe bootcamp.</p>
    </div>
  );
}
