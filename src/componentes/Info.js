import { useContext } from "react";
import { FaPlusCircle, FaTimesCircle } from "react-icons/fa";
import { ArticulosContext } from "../contexts/ArticulosContext";

export const Info = ({ formAbierto, setFormAbierto }) => {
    const { getArticulos: { articulos, nComprados } } = useContext(ArticulosContext);
    const nArticulos = articulos.length;
    const abreFormCrear = (e) => {
        e.preventDefault();
        setFormAbierto({ tipo: "crear" });
    }
    const cierraForm = (e) => {
        e.preventDefault();
        setFormAbierto({ tipo: null });
    }
    return (
        <section className="info-contenedor container-fluid">
            <div className="row">
                <div className="col">
                    <div className="info">
                        <span className="accion">
                            {
                                formAbierto.tipo
                                    ?
                                    <a href="cerrar-formulario" onClick={cierraForm}>
                                        <FaTimesCircle />
                                    </a>
                                    :
                                    <a href="abrir-formulario" onClick={abreFormCrear}>
                                        <FaPlusCircle className="icono" />
                                    </a>
                            }

                        </span>
                        <span className="total">{nComprados}/{nArticulos} comprados</span>
                    </div>
                </div>
            </div>
        </section>
    )
}