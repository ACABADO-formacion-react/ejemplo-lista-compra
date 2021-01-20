import { useForm } from "../hooks/useForm";
import { Formulario } from "./Formulario"

export const FormularioCrear = () => {
    const { datosForm, onChangeCampo } = useForm({
        nombre: ""
    });
    const onSubmit = (e) => {
        e.preventDefault();
        console.log("Artículo añadido");
    }
    return (
        <Formulario
            className="nuevo-articulo"
            titulo="Nuevo artículo"
            textoBoton="Añadir"
            datosForm={datosForm}
            onChangeCampo={onChangeCampo}
            onSubmit={onSubmit}
        />
    )
}