// import CoreConcept from './components/CoreConcept';
// import Header from './components/header/Header';
import { CoreConcept, Header, TabComponent } from './components';
import { CORE_CONCEPTS as coreConcepts } from './config/data';

// app renderer component
function App() {
  const coreConceptComps = coreConcepts.map((concept) =>
    // <CoreComponent title={concept.title} image={concept.image} description={concept.description} />
    <CoreConcept {...concept} /> // to be used when passing a single object as prop
    // <CoreComponent concept={...concept} /> // this also works, but again concept will be packed into an object, which is why the above line makes lot more sense to use
  );
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            {/* <CoreComponent title="React Components" image={reactImg} description="The core UI building block" />
            <CoreComponent title="React Components" image={reactImg} description="The core UI building block" />
            <CoreComponent title="React Components" image={reactImg} description="The core UI building block" />
            <CoreComponent title="React Components" image={reactImg} description="The core UI building block" /> */}
            {coreConceptComps}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabComponent />
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
