import Link from 'next/link'
import Layout from '../components/Layout'
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {actionCrearNuevoProducto} from "../actions";
const IndexPage = () => {
    const stateActual: any = useSelector((state) => state);

    const dispatch = useDispatch();
    const despacharEventoCrearNuevoProducto = (producto) => dispatch( actionCrearNuevoProducto(producto) )

    const eventoCrearNuevoProducto = (eventoClick) => {
        eventoClick.preventDefault();
        console.log('Holi')
        const producto = {nombre: new Date().getTime().toString()};
        despacharEventoCrearNuevoProducto(producto);
    };
    return (
        <Layout title="Home | Next.js + TypeScript Example">
            <h1>Hello Next.js 👋</h1>
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>
            <p>
                <Link href="/about">
                    <a>About</a>
                </Link>
            </p>


            {stateActual.productos.productos.map((a)=>'HOLA')}
            <button className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"} onClick={eventoCrearNuevoProducto}>CREAR NUEVO PRODUCTO</button>

            <table className="border-collapse border border-slate-400 w-full">
                <thead>
                <tr>
                    <th className="border border-slate-300 ...">State</th>
                    <th className="border border-slate-300 ...">City</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className="border border-slate-300 ...">Indiana</td>
                    <td className="border border-slate-300 ...">Indianapolis</td>
                </tr>
                <tr>
                    <td className="border border-slate-300 ...">Ohio</td>
                    <td className="border border-slate-300 ...">Columbus</td>
                </tr>
                <tr>
                    <td className="border border-slate-300 ...">Michigan</td>
                    <td className="border border-slate-300 ...">Detroit</td>
                </tr>
                </tbody>
            </table>
        </Layout>
    )
}

export default IndexPage
