import { useReducer } from "react"
import { articulosReducer } from "../reducers/articulosReducer"
import { ArticulosContext } from "./ArticulosContext"

const articulosAPI = [
    {
        id: 1,
        nombre: "Pan"
    },
    {
        id: 2,
        nombre: "Leche"
    },
    {
        id: 3,
        nombre: "Huevos"
    }
]

export const ArticulosContextProvider = ({ children }) => {
    const [articulos, dispatch] = useReducer(articulosReducer, articulosAPI.map((articulo) => ({ ...articulo, precio: null, comprado: false })));
    const setArticulos = {
        toggle: (id) => dispatch({
            type: "articulos/toggle",
            payload: id
        }),
        borrar: (id) => dispatch({
            type: "articulos/borrar",
            payload: id
        })
    }
    const getArticulos = {
        articulos,
        nComprados: articulos.filter((articulo) => articulo.comprado).length,
        articuloById: (id) => articulos.find((articulo) => articulo.id === id)
    }

    return (
        <ArticulosContext.Provider value={{ getArticulos, setArticulos }}>
            {children}
        </ArticulosContext.Provider>
    )
}