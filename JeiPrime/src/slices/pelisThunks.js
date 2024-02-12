import { getBusqueda } from "../services/api";
import { setFilms, startLoadingFilms } from "./pelis";

export const getFilms = () => {
    return async (dispatch, getState) => {
        dispatch(startLoadingFilms())

        try {
            const res = await getBusqueda("pok");

            if (!res.ok) {
                console.log(res.ok);
            }
            const data = await res.json();
            const films = data["description"];
            console.log(films)


            dispatch(setFilms({ films: films }))

        } catch (error) {
            //Notificar error con dispatch
        }

    }
}

