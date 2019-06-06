import React, { useState } from "react";
import ResourceList from "./ResourceList";

const App = () => {
  //array destructuring
  const [resource, setResource] = useState("posts");

  //another example
  //const [currentCount, setCount] = useState(0);

  //object destructuring
  //const { something } = this.state;

  //using setResource will cause component to automatically rerender
  return (
    <div>
      <div>
        <button onClick={() => setResource("posts")}>Posts</button>
        <button onClick={() => setResource("todos")}>Todos</button>
      </div>
      <ResourceList resource={resource} />
    </div>
  );
};

export default App;

//useState function returns a piece of state and a function to set it
//when useState is first called the single argument is the initial state value
//calling setResource will set the resource state and cause component to automatically rerender
//const [resource, setResource] = useState("posts");
