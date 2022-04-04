import Navbar from "./components/Navbar";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Characters from "./components/Characters";
import { Pagination } from "./components/Pagination";

function App() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});

  const initialUrl = "https://rickandmortyapi.com/api/character/";

  const onPrevious = () => {
    getAllCharacters(info.prev);
    
  }

  const onNext = () => {
    getAllCharacters(info.next);
  }

  const getAllCharacters = async (url) => {
    axios.get(url)
      .then(res => {
        const { data } = res;
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllCharacters(initialUrl);
  }, []);

  return (
    <>
    <Navbar brand="Rick and Morty"></Navbar>
    <div className="container">
      <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext}></Pagination>
      <Characters characters={characters}></Characters>
      <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} ></Pagination>
    </div>

    </>
  );
}

export default App;
