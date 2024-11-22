import reactImg from "/src/assets/react-core-concepts.png";

const concepts = ["Fundamental", "Core", "Crucial"];
const random = Math.floor(Math.random() * 3);

const Header = () => {
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {concepts[random]} React concepts you will need for almost any app you
        are going to build!
      </p>
    </header>
  );
};

export default Header;
