import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { obtenerImagenCompleta } from '../services/api';

function Favoritos() {
  const [peliculasFavoritas, setPeliculasFavoritas] = useState([]);

  const settings = {
    infinite: true,
    speed: 900,
    slidesToShow: peliculasFavoritas.length,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 5,
        }
      }
    ]
  };

  useEffect(() => {
    const fetchPeliculasFavoritas = async () => {
      const arrayLocal = localStorage.getItem('peliculas');
      const arrayParsed = JSON.parse(arrayLocal) || [];
      console.table(arrayParsed);
      const promises = arrayParsed.map(async (pelicula) => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${pelicula.id}?api_key=1d19984bf0db6b96adb50809875b0c3b`);
        const data = await response.json();
        return data;
      });

      const peliculasData = await Promise.all(promises);

      setPeliculasFavoritas(peliculasData);
    };

    fetchPeliculasFavoritas();
  }, []);

  return (
    <>
      <div className='container mx-auto'>
        <h1 className='container mx-auto text-white text-6xl mt-5 mb-2'>Mis Favoritos</h1>
        <Slider {...settings}>
          {peliculasFavoritas.map((pelicula) => (
            <Link to={`/filmDetails/${pelicula.id}`} key={pelicula.id}>
              <div className='m-4'>
                <img src={obtenerImagenCompleta(pelicula.poster_path)} alt={pelicula.title} className='rounded zoom h-96 w-64' />
                <h5 className=' text-white text-wrap mt-2'>{pelicula.title}</h5>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default Favoritos;
