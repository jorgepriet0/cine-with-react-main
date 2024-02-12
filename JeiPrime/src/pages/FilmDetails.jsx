import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Modal from '../components/Modal';
function FilmDetails() {
  const [pelicula, setPelicula] = useState([]);
  const [aparecer, setAparecer] = useState(false);
  const [valoracion, setValoracion] = useState();
  const [enFavoritos, setEnFavoritos] = useState(false);
  const parametros = useParams();
  const id = parametros.id;
  let val;

  const imagen = "https://image.tmdb.org/t/p/original/";

  const addFavoritos = () => {
    if (enFavoritos) {
      // Si ya está en favoritos, la eliminamos
      let arrayLocal = localStorage.getItem('peliculas');
      let arrayParsed = JSON.parse(arrayLocal) || [];
      const updatedList = arrayParsed.filter(peli => peli.id !== id);
      localStorage.setItem('peliculas', JSON.stringify(updatedList));
      setEnFavoritos(false); // Actualizamos la variable de estado
    } else {
      // Si no está en favoritos, la añadimos
      let arrayLocal = localStorage.getItem('peliculas');
      let arrayParsed = JSON.parse(arrayLocal) || [];
      arrayParsed.push({ id: id });
      localStorage.setItem('peliculas', JSON.stringify(arrayParsed));
      setEnFavoritos(true); // Actualizamos la variable de estado
    }
  };
  
  const getPelicula = async () => {
    const url = "https://api.themoviedb.org/3/movie/" + id + "?api_key=1d19984bf0db6b96adb50809875b0c3b"

    fetch(url)
      .then(res => res.json())
      .then(data => {
        setPelicula(data);
        val = data.vote_average + "";
        val = parseInt(val)
        if (val >= 0 && val <= 2) {
          setValoracion("cara1");
        }
        if (val > 2 && val <= 4) {
          setValoracion("cara2");
        }
        if (val > 4 && val <= 6) {
          setValoracion("cara3");
        }
        if (val > 6 && val < 8) {
          setValoracion("cara4");
        }
        if (val >= 8 && val <= 10) {
          setValoracion("cara5");
        }
      });
  };
  useEffect(() => {
    
    getPelicula();
    setAparecer(true);
    let arrayLocal = localStorage.getItem('peliculas');
    let arrayParsed = JSON.parse(arrayLocal) || [];
    const isInFavorites = arrayParsed.some(peli => peli.id === id);
    setEnFavoritos(isInFavorites);
  }, [pelicula,id]);

  return (
    <div className='text-white box-border text-3xl flex mt-12 h-full w-full justify-center ml-auto mr-auto '>
      <div key={pelicula.id} className=' box-border '>
        <img onLoad={() => setAparecer(true)} src={`${imagen + pelicula.poster_path} `} alt={pelicula.title} className='rounded w-[500px] h-[700px]' />
      </div>
      <div className={`foto texto text-3xl bg-black box-border w-[500px] h-[700px] text-white p-4 rounded ${aparecer ? 'aparecer' : ''}`}>
        <div className='text-center text-[#FFA726]  text-wrap p-4 box-border'>{pelicula.title}</div>
        <div className={`sinopsis text-xl text-justify transition-transform transform ${aparecer ? 'scale-y-100' : 'scale-y-0'}`}>{pelicula.overview}</div>
        <br />
        <div className={`estreno text-xl text-justify flex`}>
          <span className={`mr-2 text-[#FFA726]`}>Valoración:</span> <img className='w-8 h-8 ml-2 rounded-sm' src={`/media/${valoracion}.png`} alt="cara" style={{ marginTop: '-4px' }} />
        </div>
        <br />
        <div className='estreno text-xl text-justify '>
          <span className='text-[#FFA726]'>Fecha de lanzamiento: </span>{pelicula.release_date}
        </div>
        <div className='mt-10 container h-auto flex flex-row justify-around'>
          <button className='p-2 h-14 border-white border-2 w-15 text-xl rounded-lg text-white botones' onClick={addFavoritos}>
            {enFavoritos ? 'Quitar de Favoritos' : 'Añadir a Favoritos'}
          </button> 
          <Modal titulo={pelicula.title} foto={`${imagen + pelicula.poster_path} `} />

        </div>
      </div>
    </div>
  );
}

export default FilmDetails;
