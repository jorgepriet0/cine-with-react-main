import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

function Films() {
  const [familia, setFamilia] = useState([])
  const [suspense, setSuspense] = useState([])
  const [comedia, setComedia] = useState([])

  const idFamilia = 10751
  const idSuspense = 53
  const idComedia = 35

  const imagen = "https://image.tmdb.org/t/p/original/"
  const url = "https://api.themoviedb.org/3/discover/movie"

  const getFamiliares = async () => {
    try {
      let familiares = [];
      for (let pagina = 1; pagina <= 5; pagina++) {
        const response = await axios.get(url, {
          params: {
            api_key: "1d19984bf0db6b96adb50809875b0c3b",
            page: pagina,
            with_genres: idFamilia
          }
        });

        if (response.data.results) {
          familiares = [...familiares, ...response.data.results];
        }
      }
      const primeras20 = familiares.slice(0, 20);
      setFamilia(primeras20);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const getSuspense = async () => {
    try {
      let familiares = [];
      for (let pagina = 1; pagina <= 5; pagina++) {
        const response = await axios.get(url, {
          params: {
            api_key: "1d19984bf0db6b96adb50809875b0c3b",
            page: pagina,
            with_genres: idSuspense
          }
        });

        if (response.data.results) {
          familiares = [...familiares, ...response.data.results];
        }
      }
      const primeras20 = familiares.slice(0, 20);
      setSuspense(primeras20);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const getComedia = async () => {
    try {
      let comedias = [];
      for (let pagina = 1; pagina <= 5; pagina++) {
        const response = await axios.get(url, {
          params: {
            api_key: "1d19984bf0db6b96adb50809875b0c3b",
            page: pagina,
            with_genres: idComedia
          }
        });

        if (response.data.results) {
          comedias = [...comedias, ...response.data.results];
        }
      }
      const primeras20 = comedias.slice(0, 20);
      setComedia(primeras20);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    getFamiliares()
    getSuspense()
    getComedia()
  }, []);

  function obtenerDetalles(id) {
    console.log(id);
  }

  const settings = {
    infinite: true,
    speed: 900,
    slidesToShow: 5,
    slidesToScroll: 1,
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
  return (
    <>
      <div className='container h-full mx-auto'>
        <div>
          <h1 className='text-white text-6xl mt-5 text-center mb-'>Géneros</h1>
        </div>
        <div>
          <h1 className='text-white text-5xl mb-2 mt-5'>Family</h1>
        </div>
        <Slider {...settings}>
          {familia.map((movie) => (
            <Link to={`/filmDetails/${movie.id}`} key={movie.id}>
              <div className='m-4 zoom'>
                <button onClick={() => obtenerDetalles(movie.id)}>
                  <img src={`${imagen + movie.poster_path}`} alt={movie.title} className='h-96 w-64' />
                  <h5 className='text-center text-white text-wrap mt-2'>{movie.title}</h5>
                </button>
              </div>
            </Link>
          ))}
        </Slider>

        <div>
          <h1 className='text-white text-5xl mb-2 mt-5'>Suspense</h1>
        </div>
        <Slider {...settings}>
          {suspense.map((movie) => (
            <Link to={`/filmDetails/${movie.id}`} key={movie.id}>
              <div className='m-4 zoom'>
                <button onClick={() => obtenerDetalles(movie.id)}>
                  <img src={`${imagen + movie.poster_path}`} alt={movie.title} className='h-96 w-64' />
                  <h5 className='text-center text-white text-wrap mt-2'>{movie.title}</h5>
                </button>
              </div>
            </Link>
          ))}
        </Slider>

        <div>
          <h1 className='text-white text-5xl mb-2 mt-5'>Comedia</h1>
        </div>
        <Slider {...settings}>
          {comedia.map((movie) => (
            <Link to={`/filmDetails/${movie.id}`} key={movie.id}>
              <div className='m-4 zoom'>
                <button onClick={() => obtenerDetalles(movie.id)}>
                  <img src={`${imagen + movie.poster_path}`} alt={movie.title} className='h-96 w-64' />
                  <h5 className='text-center text-white text-wrap mt-2'>{movie.title}</h5>
                </button>
              </div>
            </Link>
          ))}
        </Slider>



      </div>

    </>
  );
}

export default Films;
