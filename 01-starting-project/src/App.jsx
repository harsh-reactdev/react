import { useState } from 'react';

import { CoreConcept, Header, TabButton, TabContent } from './components';
import { CORE_CONCEPTS as coreConcepts, BUTTON_LABELS as btnLabels } from './config/data';

const getCoreConcepts = function () {
  return coreConcepts.map((concept, ind) =>
    // <CoreComponent title={concept.title} image={concept.image} description={concept.description} />
    <CoreConcept key={ind} {...concept} /> // to be used when passing a single object as prop
    // <CoreComponent concept={...concept} /> // this also works, but again concept will be packed into an object, which is why the above line makes lot more sense to use
  );
  retur;
};

// app renderer component
function App() {
  const [tabContent, setTabContent] = useState('');

  const getTabComponent = function () {
    return btnLabels.map((label, ind) =>
      <TabButton key={ind} isSelected={tabContent === label} onSelect={handleClick}>{label}</TabButton>);
  };

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
            {/* <TabComponent onSelect={handleClick} /> */}
            {/* <TabButton isSelected={tabContent === 'Components'} onSelect={handleClick}>Components</TabButton>
            <TabButton isSelected={tabContent === 'JSX'} onSelect={handleClick}>JSX</TabButton>
            <TabButton isSelected={tabContent === 'Props'} onSelect={handleClick}>Props</TabButton>
            <TabButton isSelected={tabContent === 'State'} onSelect={handleClick}>State</TabButton> */}
            {getTabComponent()}
          </menu>
          {/* {tab} */}
          {tabContent ?
            <div id="tab-content">
              <TabContent data={tabContent} />
            </div>
            : <p>Please Select a topic.</p>
          }
        </section>
      </main>
    </div>
  );
}

export default App;
