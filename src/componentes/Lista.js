import { useContext } from "react"
import { ArticulosContext } from "../contexts/ArticulosContext"
import { Articulo } from "./Articulo"
import { FormularioCrear } from "./FormularioCrear"
import { FormularioEditar } from "./FormularioEditar"

export const Lista = ({ formAbierto, setFormAbierto }) => {
    const { getArticulos: { articulos } } = useContext(ArticulosContext);
    return (
        <main className="lista container-fluid">
            <div className="row">
                <div className="col">
                    {formAbierto.tipo === "crear" && <FormularioCrear />}
                    {formAbierto.tipo === "editar" && <FormularioEditar id={formAbierto.id} />}
                    <ul className="articulos list-unstyled">
                        {
                            articulos.map((articulo) => (
                                <Articulo key={articulo.id} articulo={articulo} setFormAbierto={setFormAbierto} />
                            ))
                        }
                        <li className="total text-right">1.95€</li>
                    </ul>
                </div>
            </div>
        </main >
    )
}