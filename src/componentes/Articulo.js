import { useContext, useEffect } from "react";
import { FaTimes } from "react-icons/fa"
import { ArticulosContext } from "../contexts/ArticulosContext";

export const Articulo = ({ articulo: { id, nombre, precio, comprado }, setFormAbierto }) => {
    const { setArticulos } = useContext(ArticulosContext);
    const abreFormEditar = (e) => {
        if (e.target.type === "checkbox" || e.target.classList.contains("icono") || e.target.parentElement.classList.contains("icono")) {
            return;
        }
        setFormAbierto({ tipo: "editar", id });
    }
    const toggleComprado = () => setArticulos.toggle(id);
    const borrarArticulo = () => setArticulos.borrar(id);

    useEffect(() => {
        return () => { console.log(`El artículo ${nombre} se fue`) }
    }, [nombre]);
    return (
        <li className={`articulo${comprado ? " comprado" : ""}`} onClick={abreFormEditar}>
            <input type="checkbox" name="comprado" checked={comprado} onChange={toggleComprado} />
            <span className="nombre">{nombre}</span>
            { precio && <span className="precio text-right">{precio}€</span>}
            <FaTimes className="icono" onClick={borrarArticulo} />
        </li>
    )
}