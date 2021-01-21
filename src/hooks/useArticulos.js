import { useCallback, useReducer } from "react";
import { actionTypes, articulosReducer } from "../reducers/articulosReducer";
import { useFetch } from "./useFetch";

export const useArticulos = () => {
    const [articulos, dispatch] = useReducer(articulosReducer, []);
    const setArticulos = {
        toggle: (id) => dispatch({
            type: actionTypes.toggleArticulos,
            payload: id
        }),
        borrar: (id) => dispatch({
            type: actionTypes.borrarArticulos,
            payload: id
        }),
        cargar: useCallback((articulos) => dispatch({
            type: actionTypes.cargarArticulos,
            payload: articulos
        }), [])
    };
    const getArticulos = {
        articulos,
        nComprados: articulos.filter((articulo) => articulo.comprado).length,
        articuloById: (id) => articulos.find((articulo) => articulo.id === id)
    }
    const { error, cargando } = useFetch(process.env.REACT_APP_URL_API, setArticulos.cargar);

    return { getArticulos, setArticulos, error, cargando }
}