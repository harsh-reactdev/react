import CoreConcept from './CoreConcept';
import { CORE_CONCEPTS as coreConcepts } from '../../config/data';

const getCoreConcepts = function () {
    return coreConcepts.map((concept, ind) =>
        // <CoreComponent title={concept.title} image={concept.image} description={concept.description} />
        <CoreConcept key={ind} {...concept} /> // to be used when passing a single object as prop
        // <CoreComponent concept={...concept} /> // this also works, but again concept will be packed into an object, which is why the above line makes lot more sense to use
    );
};

const CoreConcepts = function () {
    return (
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
    );
};

export default CoreConcepts;