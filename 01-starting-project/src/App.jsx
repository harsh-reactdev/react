import reactImg from './assets/react-core-concepts.png';
// Header component
const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function getRandomInt(max) {
  const rand = Math.floor(Math.random() * max);
  console.log(rand);
  // return Math.floor(Math.random() * (max + 1));
  return rand;
}

function Header() {
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {reactDescriptions[getRandomInt(reactDescriptions.length)]} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function CoreComponent(props) {
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

// app renderer component
function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            <CoreComponent title="JS" image={reactImg} description={ } />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
