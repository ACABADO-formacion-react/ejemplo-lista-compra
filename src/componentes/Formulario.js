export const Formulario = ({ datosForm, className, titulo, hayPrecio, textoBoton, onChangeCampo, onSubmit }) => {
    return (
        <form className={className} onSubmit={onSubmit}>
            <h3>{titulo}</h3>
            <label htmlFor="nombre">Nombre: </label>
            <input type="text" id="nombre" value={datosForm.nombre} onChange={onChangeCampo} />
            { hayPrecio &&
                <>
                    <label htmlFor="precio">Precio: </label>
                    <input type="number" id="precio" value={datosForm.precio} onChange={onChangeCampo} /> €
                </>
            }
            <button type="submit">{textoBoton}</button>
        </form>
    )
}