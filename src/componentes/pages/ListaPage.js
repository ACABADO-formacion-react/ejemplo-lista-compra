import { useParams, useLocation } from "react-router-dom"

const ListaPage = () => {
    /* { error && <p>Ha ocurrido un error al cargar los datos</p> }
            <Info formAbierto={formAbierto} setFormAbierto={setFormAbierto} />
            <Lista formAbierto={formAbierto} setFormAbierto={setFormAbierto} />
    { cargando && <Spinner /> } */
    const params = useParams();
    const location = useLocation();
    const queryString = new URLSearchParams(location.search)
    const id = queryString.get("id");
    return (
        <>
            <h2>Ésta es la página Lista{id && <small>({id})</small>}</h2>
        </>
    )
}

export default ListaPage