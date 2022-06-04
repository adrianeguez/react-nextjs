import {AGREGAR_PRODUCTO, AGREGAR_PRODUCTO_ERROR, AGREGAR_PRODUCTO_EXITO} from "../types";
import {agregarProductoPayload} from "../actions/productos.action";

const initialState = {
    productos: [],
    error: null,
    loading: false
}

export default function (state = initialState, action: agregarProductoPayload) {
    switch (action.type) {
        case AGREGAR_PRODUCTO:
            return {
                ...state,
                loading: true,
            };
        case AGREGAR_PRODUCTO_EXITO:
            return {
                ...state,
                loading: false,
                productos: action.payload ? [...state.productos, action.payload] : [...state.productos]
            }
        case AGREGAR_PRODUCTO_ERROR:
            console.error('Error creando producto', action.error);
            return {
                ...state,
                loading: false
            }
        default:
            return state;
    }
}