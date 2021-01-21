import { useContext, useState } from "react";
import { useParams, useLocation } from "react-router-dom"
import { ArticulosContext } from "../../contexts/ArticulosContext";
import { Info } from "../Info";
import { Lista } from "../Lista";
import { Spinner } from "../Spinner";

const ListaPage = () => {
    const params = useParams();
    const location = useLocation();
    const queryString = new URLSearchParams(location.search)
    const id = queryString.get("id");
    const [formAbierto, setFormAbierto] = useState({ tipo: null });
    const { error, cargando } = useContext(ArticulosContext);
    return (
        <>
            { error && <p>Ha ocurrido un error al cargar los datos</p>}
            <Info formAbierto={formAbierto} setFormAbierto={setFormAbierto} />
            <Lista formAbierto={formAbierto} setFormAbierto={setFormAbierto} />
            { cargando && <Spinner />}
        </>
    )
}

export default ListaPage