import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [moviesList, setMoviesList] = useState([
    {
      name: "avatar",
      rating: 8,
      release_date: "10/1/2022",
    },
    {
      name: "DVD",
      rating: 8,
      release_date: "10/1/2022",
    },
  ]);

  const getData = async () => {
    const response = await axios.get("http://localhost:3001/api/movies/");
    setMoviesList(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(moviesList);
  return (
    <div className="App">
      <ul>
        {moviesList.map((element, index) => (
          <li key={index}>
            <div>
              <h2>{element.name} </h2>
            </div>
            <p> Rating: {element.rating}</p>
            <p> Release Date: {element.release_date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
