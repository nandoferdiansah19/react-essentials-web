import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../data";

const CoreConcepts = () => {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((concept) => (
          <CoreConcept
            key={concept.title}
            coreImg={concept.image}
            title={concept.title}
            description={concept.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default CoreConcepts;
