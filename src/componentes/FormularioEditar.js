import { useContext } from "react";
import { ArticulosContext } from "../contexts/ArticulosContext";
import { useForm } from "../hooks/useForm";
import { Formulario } from "./Formulario"

export const FormularioEditar = ({ id }) => {
    const { getArticulos: { articuloById } } = useContext(ArticulosContext);
    const articuloEditado = articuloById(id);
    const { datosForm, onChangeCampo } = useForm({
        nombre: articuloEditado.nombre,
        precio: articuloEditado.precio ? articuloEditado.precio : ""
    });
    const onSubmit = (e) => {
        e.preventDefault();
        console.log("Artículo modificado", id);
    }
    return (
        <Formulario
            className="editar-articulo"
            titulo="Editar artículo"
            hayPrecio
            textoBoton="Modificar"
            datosForm={datosForm}
            onChangeCampo={onChangeCampo}
            onSubmit={onSubmit}
        />
    )
}