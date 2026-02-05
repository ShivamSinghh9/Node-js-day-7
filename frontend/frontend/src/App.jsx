import { useState } from "react";
import axios, { Axios } from 'axios'

const App = () => {
  const [notes, setnotes] = useState([
    {
      title: "Test title 1",
      description: "Test description 1",
    },
    {
      title: "Test title 2",
      description: "Test description 2",
    },
    {
      title: "Test title 3",
      description: "Test description 3",
    },
    {
      title: "Test title 4",
      description: "Test description 4",
    },
  ])

  axios.get('http://localhost:3000/notes')
  .then((res)=>{
    setnotes(res.data.notes)
    
  })

  return (
    <div>
      <div className="notes">
        {notes.map((note) => {
          return (
            <div className="note">
              <h1>{note.title}</h1>
              <p>{note.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
