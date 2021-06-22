
import './App.css';
import ironhackLogo from "./assets/images/ironhack-logo.svg"
import menuLogo from "./assets/images/menu-top.svg"
import icon1 from "./assets/images/icon1.png"
import icon2 from "./assets/images/icon2.png"
import icon3 from "./assets/images/icon3.png"
import icon4 from "./assets/images/icon4.png"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={ironhackLogo}/>
        <img src={menuLogo}/>
        <div>
          <h1>Say hello to ReactJS</h1>
          <p>You will learn a Frontend framework from scratch, to become a Ninka Developer</p>
          <span>Awesome!</span>
        </div>
      </header>
      <section>
        <div>
          <img src={icon1}/>
          <h3>Declarative</h3>
          <p>React makes it painless to create interactives UIs.</p>
        </div>
        <div>
        <img src={icon2}/>
        <h3>Components</h3>
          <p>Build encapsulated components that manage their state.</p>
        </div>
        <div>
        <img src={icon3}/>
        <h3>Single-Way</h3>
          <p>A set of immutable values are passed to the component's.</p>
        </div>
        <div>
        <img src={icon4}/>
        <h3>JSX</h3>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
      </section>
    </div>
  );
}

export default App;
