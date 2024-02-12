import React from "react";

export default function Modal(props) {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="p-2 h-14 border-white border-2 w-15 text-xl rounded-lg text-white botones" type="button" onClick={() => setShowModal(true)}>
        Comprar Entrada
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">

              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-black outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-xl font-semibold">
                    Reservar entradas para {props.titulo}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none" onClick={() => setShowModal(false)}>
                    <span className=" text-white h-6 w-6 text-2xl block ">X</span>
                  </button>
                </div>
                <div className="flex flex-row p-6 flex-auto">
                  <div>
                  <img className='w-20 h-30 ml-2 rounded-sm' src={props.foto} alt="cara"  />
                  </div>
                  <div className="ml-5">
                    <p className="text-white my-4 text-blueGray-500 text-lg leading-relaxed">
                      Fecha: <input type="date" className="ml-2 text-black p-1 rounded-lg" />
                    </p>
                    <p className="text-white my-4 text-blueGray-500 text-lg leading-relaxed">
                      Asientos: <input type="number" className="ml-2 text-black p-1 rounded-lg" />
                    </p>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" onClick={() => setShowModal(false)} >
                    CERRAR
                  </button>
                  <button className="bg-emerald-700 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" onClick={() => {alert("Reserva Realizada Correctamente")}}>
                    Reservar
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}