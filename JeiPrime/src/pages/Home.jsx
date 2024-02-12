import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import Buscador from '../components/Buscador';
import { Link } from 'react-router-dom';
import { getPeliculas, getBusqueda, obtenerDetalles, obtenerImagenCompleta } from '../services/api';

function Home() {
  const [peliculas, setPeliculas] = useState([]);
  const [resultadosBusqueda, setResultadosBusqueda] = useState([]);
  const [busqueda, setBusqueda] = useState('');

  const settings = {
    infinite: true,
    speed: 900,
    slidesToShow: 5,
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
    const fetchPeliculas = async () => {
      const peliculasData = await getPeliculas();
      setPeliculas(peliculasData);
    };

    fetchPeliculas();
  }, []);

  useEffect(() => {
    if (busqueda) {
      const fetchBusqueda = async () => {
        const busquedaData = await getBusqueda(busqueda);
        setResultadosBusqueda(busquedaData);
      };

      fetchBusqueda();
    }
  }, [busqueda]);

  return (
    <>
      <div className='container mx-auto'>
        <h1 className='container mx-auto text-white text-6xl mt-5 mb-2'>Estrenos</h1>
        <Slider {...settings}>
          {peliculas.map((movie) => (
            <Link to={`/filmDetails/${movie.id}`} key={movie.id}>
              <div className='m-4'>
                <button onClick={() => obtenerDetalles(movie.id)}>
                  <img src={obtenerImagenCompleta(movie.poster_path)} alt={movie.title} className='rounded zoom h-96 w-64' />
                  <h5 className='text-center text-white text-wrap mt-2'>{movie.title}</h5>
                </button>
              </div>
            </Link>
          ))}
        </Slider>

        <div className='container mt-8 flex mx-auto'>
          <h1 className='text-white text-6xl mb-2 mr-4'>Búsqueda</h1>
          <Buscador onSearch={setBusqueda} className='ml-12' />
        </div>

        <Slider {...settings}>
          {resultadosBusqueda.map((movie) => (
            <Link to={`/filmDetails/${movie.id}`} key={movie.id}>
              <div className='m-4'>
                <button onClick={() => obtenerDetalles(movie.id)}>
                  <img src={obtenerImagenCompleta(movie.poster_path)} alt={movie.title} className='rounded zoom h-96 w-64' />
                  <h5 className='text-center text-white text-wrap mt-2'>{movie.title}</h5>
                </button>
              </div>
            </Link>
          ))}
        </Slider>

        <h1 className='text-white text-6xl mb-2 mr-4 mt-36'>Ofertas</h1>
        <h1 className='text-white text-2xl mb-2 mr-4'>¿ Te las vas a perder ?</h1>
        <div className="flex flex-row p-6 flex-auto">

          <div>
            <img className='w-[650px] h-[300px] ml-2 rounded-sm' src="/media/promo1.jpg" alt="cara" />
          </div>
          <div className="ml-20 w-3/4">
            <p className="text-white my-4 text-blueGray-500 text-4xl leading-relaxed font-bold">
            OFERTA EXCLUSIVA UNLIMITED CARD: ¡DESCUENTO DE 10% EN TODOS LOS PRODUCTOS DE BAR!
            </p>
            <p className="text-white my-4 text-blueGray-500 text-xl leading-relaxed font-bold">
            Con esta oferta especial para miembros Unlimited Card, te beneficiarás de un descuento del 10% en todos nuestros productos de bar.
            </p>
          </div>
        </div>
            <hr />

        <div className="flex flex-row p-6 flex-auto">
          <div>
            <img className='w-[650px] h-[300px] ml-2 rounded-sm' src="/media/promo2.jpg" alt="cara" />
          </div>
          <div className="ml-20 w-3/4">
            <p className="text-white my-4 text-blueGray-500 text-4xl leading-relaxed font-bold">
            COMPRA TU MENÚ ARGYLLE Y CONVIÉRTETE EN UN AGENTE ESPÍA POR UN FIN DE SEMANA
            </p>
            <p className="text-white my-4 text-blueGray-500 text-xl leading-relaxed font-bold">
            Participa en el sorteo con Argylle (entre el 1 y el 28 de febrero) y podrás conseguir un viaje de fin de semana para 2 personas a Londres lleno de sorpresas
            </p>
          </div>
        </div>
            <hr />
        <div className="flex flex-row p-6 flex-auto">
          <div>
            <img className='w-[650px] h-[300px] ml-2 rounded-sm' src="/media/promo3.jpg" alt="cara" />
          </div>
          <div className="ml-20 w-3/4">
            <p className="text-white my-4 text-blueGray-500 text-4xl leading-relaxed font-bold">
            COMPRA TU MENÚ ARGYLLE Y CONVIÉRTETE EN UN AGENTE ESPÍA POR UN FIN DE SEMANA
            </p>
            <p className="text-white my-4 text-blueGray-500 text-xl leading-relaxed font-bold">
            Participa en el sorteo con Argylle (entre el 1 y el 28 de febrero) y podrás conseguir un viaje de fin de semana para 2 personas a Londres lleno de sorpresas
            </p>
          </div>
        </div>

      </div>
    </>
  );
}

export default Home;
