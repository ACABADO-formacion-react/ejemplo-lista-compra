export const articulosReducer = (state, action) => {
    switch (action.type) {
        case "articulos/toggle":
            return state.map((articulo) => articulo.id === action.payload ? ({ ...articulo, comprado: !articulo.comprado }) : articulo);
        case "articulos/borrar":
            return state.filter((articulo) => articulo.id !== action.payload);
        default:
            return state;
    }
}