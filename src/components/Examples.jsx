import TabButton from "./TabButton";
import { EXAMPLES } from "../data";

const Examples = ({ selectedTopic, handleClick }) => {
  return (
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
  );
};

export default Examples;
