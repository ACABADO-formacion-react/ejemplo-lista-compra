export const actionTypes = {
    cargarArticulos: "articulos/cargar",
    toggleArticulos: "articulos/toggle",
    borrarArticulos: "articulos/borrar",
}

export const articulosReducer = (state, action) => {
    switch (action.type) {
        case actionTypes.cargarArticulos:
            return action.payload.map((articulo) => ({ ...articulo, precio: null, comprado: false }));
        case actionTypes.toggleArticulos:
            return state.map((articulo) => articulo.id === action.payload ? ({ ...articulo, comprado: !articulo.comprado }) : articulo);
        case actionTypes.borrarArticulos:
            return state.filter((articulo) => articulo.id !== action.payload);
        default:
            return state;
    }
}