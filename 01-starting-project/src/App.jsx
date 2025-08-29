import { useState } from 'react';

import { CoreConcept, Header, TabComponent, TabContent } from './components';
import { CORE_CONCEPTS as coreConcepts } from './config/data';

const getCoreConcepts = function () {
  return coreConcepts.map((concept) =>
    // <CoreComponent title={concept.title} image={concept.image} description={concept.description} />
    <CoreConcept {...concept} /> // to be used when passing a single object as prop
    // <CoreComponent concept={...concept} /> // this also works, but again concept will be packed into an object, which is why the above line makes lot more sense to use
  );
  retur;
};

// app renderer component
function App() {
  const [tabContent, setTabContent] = useState('');

  const handleClick = function (e) {
    setTabContent(e.target.textContent);
  };


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
            {getCoreConcepts()}
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabComponent onSelect={handleClick} />
          </menu>
          {/* {tab} */}
          {tabContent &&
            <div id="tab-content">
              <TabContent data={tabContent} />
            </div>
          }
        </section>
      </main>
    </div>
  );
}

export default App;
