import React, {useEffect, useState} from "react";
import api from "./services/api"
import "./styles.css";

function App() {

  const [repository, setRepository] = useState([])
  useEffect(()=>{
    api.get('repositories').then(repository => {
      {repository.data}
    })
  },[])

  async function handleAddRepository() {
    // TODO
  }

  async function handleRemoveRepository(id) {
    // TODO
  }

  return (
    <div>
      <ul data-testid="repository-list">
        {repositories.map(repository => (
          <li key={repository.id}>
          {repository.title}

          <button onClick={() => handleRemoveRepository(1)}>
            Remover
          </button>
        </li>
        ))}
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
