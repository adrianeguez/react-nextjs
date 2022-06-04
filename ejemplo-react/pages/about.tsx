import Link from 'next/link'
import Layout from '../components/Layout'
import dynamic from "next/dynamic";
import {ReactNode} from "react";

const DynamicLazyLoadHello = dynamic(
    () => import('../components/Hello'),
    {ssr: false}
)
import {actionCrearNuevoProducto} from '../actions/index';
import {useDispatch, useSelector} from "react-redux";

const AboutPage = () => {
    const stateActual: any = useSelector((state) => state);

    const dispatch = useDispatch();
    const despacharEventoCrearNuevoProducto = (producto) => dispatch(actionCrearNuevoProducto(producto))

    const eventoCrearNuevoProducto = (eventoClick) => {
        eventoClick.preventDefault();
        console.log('Holi')
        const producto = {nombre: new Date().getTime().toString()};
        despacharEventoCrearNuevoProducto(producto);
    };

    return (
        <>
            <Layout title="About | Next.js + TypeScript Example">
                <DynamicLazyLoadHello>
                    <p>Yo tambien fui enviado dinamicamente</p>
                    {stateActual.productos.productos.map((a) => 'HOLA')}
                    <button className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"}
                            onClick={eventoCrearNuevoProducto}>CREAR NUEVO PRODUCTO
                    </button>
                </DynamicLazyLoadHello>
            </Layout>
        </>
    )
}

export default AboutPage
