import { useState } from "react";
import CoreConcepts from "./components/CoreConcepts";
import Header from "./components/Header";
import TabButton from "./components/TabButton";
import { CORE_CONCEPTS } from "./data";
import { EXAMPLES } from "./data";

function App() {
  const [selectedTopic, setSelectedTopic] = useState("components");

  const handleClick = (e) => {
    setSelectedTopic(e.target.textContent.toLowerCase());
  };
  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) => (
              <CoreConcepts
                key={concept.title}
                coreImg={concept.image}
                title={concept.title}
                description={concept.description}
              />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              className={selectedTopic === "components" ? "active" : undefined}
              onClick={handleClick}
            >
              Components
            </TabButton>
            <TabButton
              className={selectedTopic === "jsx" ? "active" : undefined}
              onClick={handleClick}
            >
              JSX
            </TabButton>
            <TabButton
              className={selectedTopic === "props" ? "active" : undefined}
              onClick={handleClick}
            >
              Props
            </TabButton>
            <TabButton
              className={selectedTopic === "state" ? "active" : undefined}
              onClick={handleClick}
            >
              State
            </TabButton>
          </menu>
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
