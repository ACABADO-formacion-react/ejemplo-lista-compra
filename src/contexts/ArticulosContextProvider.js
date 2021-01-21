import { useArticulos } from "../hooks/useArticulos"
import { ArticulosContext } from "./ArticulosContext"

export const ArticulosContextProvider = ({ children }) => {

    const { getArticulos, setArticulos, error, cargando } = useArticulos();

    return (
        <ArticulosContext.Provider value={{ getArticulos, setArticulos, error, cargando }}>
            {children}
        </ArticulosContext.Provider>
    )
}