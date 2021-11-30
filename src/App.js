import "./App.css";
import ironhackLogo from "./assets/images/ironhack-logo.svg";
import menuLogo from "./assets/images/menu-top.svg";
import icon1 from "./assets/images/icon1.png";
import icon2 from "./assets/images/icon2.png";
import icon3 from "./assets/images/icon3.png";
import icon4 from "./assets/images/icon4.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Cards from "./Cards.js";

const cards = [
  {
    img: icon1,
    title: "Declarative",
    description: "React makes it painless to create interactives UIs.",
  },
  {
    img: icon2,
    title: "Components",
    description: "Build encapsulated components that manage their state.",
  },
  {
    img: icon3,
    title: "Single-Way",
    description: "A set of immutable values are passed to the component's.",
  },
  {
    img: icon4,
    title: "JSX",
    description: "Statically-typed, designed to run on modern browsers.",
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <img src={ironhackLogo} className="Ironhack" alt="ironhack-logo" />
          <img src={menuLogo} className="Menu" alt="" />
        </nav>
        <div className="Text">
          <h1>Say hello to ReactJS</h1>
          <p>
            You will learn a Frontend framework from scratch, to become a Ninka
            Developer.
          </p>
          <span>Awesome!</span>
        </div>
      </header>
      <section className="Second-half">
        {cards.map((obj) => {
          return (
            <Cards
              img={obj.img}
              title={obj.title}
              description={obj.description}
            />
          );
        })}
      </section>
    </div>
  );
}

export default App;
