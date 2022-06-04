import Link from 'next/link'
import Layout from '../components/Layout'
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";

const AboutPage = () => {
    const stateActual: any = useSelector((state) => state);
    useEffect(() => {
        console.log(stateActual);
        console.log('Me cargue mi rey');
    }, [])
    return (
        <>

            <Layout title="About | Next.js + TypeScript Example">
                <h1>About 2</h1>
                <p>This is the about page 2</p>
                <p>
                    <Link href="/">
                        <a>Go home 2</a>
                    </Link>
                </p>
            </Layout>
            )(
            <Layout title="About | Next.js + TypeScript Example">
                <h1>About 2</h1>
                <p>This is the about page 2</p>
                <p>
                    <Link href="/">
                        <a>Go home 2</a>
                    </Link>
                </p>
            </Layout>
        </>
    )
}

export default AboutPage
