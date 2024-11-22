import { useState } from "react";
import Header from "./components/Header";
import CoreConcepts from "./components/CoreConcepts";
import Examples from "./components/Examples";

function App() {
  const [selectedTopic, setSelectedTopic] = useState("components");

  const handleClick = (e) => {
    setSelectedTopic(e.target.textContent.toLowerCase());
  };
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples selectedTopic={selectedTopic} handleClick={handleClick} />
      </main>
    </>
  );
}

export default App;
