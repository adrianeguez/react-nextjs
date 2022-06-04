import {AGREGAR_PRODUCTO, AGREGAR_PRODUCTO_ERROR, AGREGAR_PRODUCTO_EXITO} from '../types';

export function actionCrearNuevoProducto(producto: { nombre: string; }): any {
    return (dispatch) => {
        console.log('desde action', producto, +producto.nombre);
        dispatch(agregarProducto());
        if (+producto.nombre % 2 === 0) {
            dispatch(agregarProductoExito(producto));
        } else {
            dispatch(agregarProductoError());
        }
    }
}

const agregarProducto = () => ({
    type: AGREGAR_PRODUCTO
});

export interface agregarProductoPayload {
    type: string;
    payload?: { nombre: string };
    error?: any;
}

const agregarProductoExito = (producto: { nombre: string; }) => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
});

const agregarProductoError = () => ({
    type: AGREGAR_PRODUCTO_ERROR,
    error: 'Error carnal',
});