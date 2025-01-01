import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import Form from "./components/Form";

function App() {
  const [username, setUsername] = useState("gokcenazakyol");
  return (
    <div className="flex flex-col md:flex-row h-screen justify-around items-center bg-zinc-800 p-4">
      <Form username={username} setUsername={setUsername} />
      <a href={`https://github.com/${username}`} target="_blank">
        <Card username={username} />
      </a>
    </div>
  );
}

export default App;
